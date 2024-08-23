import NextAuth from "next-auth";
import authConfig from "./auth.config";
import dbConnect from "./lib/db";
import UserModel from "./models/User";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async signIn({ user, account }: any) {
      const { name, email, image } = user;
      if (account.provider === "google") {
        try {
          await dbConnect();
          const existingUser = await UserModel.findOne({
            email: email,
          });
          if (!existingUser) {
            const res = await fetch(`${process.env.NEXT_URL}api/save-user`, {
              method: "POST",
              body: JSON.stringify({ name, email, image }),
            });
            if (res.status == 200) {
              return user;
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
      return user;
    },
  },
});
