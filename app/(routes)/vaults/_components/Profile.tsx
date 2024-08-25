"use client";

import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/components/ui/use-toast";
import { signOut, useSession } from "next-auth/react";

const Profile = () => {
  const { data: user } = useSession();
  const { toast } = useToast();
  const deleteAccount = () => {
    toast({
      title: "Account Deleted",
      description: "This feature is not yet implemented.",
    });
  };
  if (!user)
    return (
      <main>
        <div className="flex flex-col items-center justify-center space-y-4 p-20">
          <img src="/profile.svg" alt="profile" className="w-48 h-48" />
          <h1 className="text-xl">Loading your profile, please wait ..</h1>
        </div>
      </main>
    );
  return (
    <main>
      <div className="flex flex-col items-center justify-center space-y-8">
        <div>
          <img
            src={user?.user?.image!}
            alt="profile pic"
            className="w-36 h-36 rounded-3xl border-8 border-neutral-300 shadow"
          />
        </div>
        <div className="text-center space-y-2">
          <Button
            variant={"secondary"}
            className="text-xl font-semibold cursor-default"
          >
            {user?.user?.name}
          </Button>
          <p className="hover:underline hover:underline-offset-1">
            {user?.user?.email}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}>
            Sign Out
          </Button>
          <Button onClick={deleteAccount} variant={"destructive"}>
            Delete Account
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
