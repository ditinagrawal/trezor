import dbConnect from "@/lib/db";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  // console.log("🚀 ~ file: route.ts:3 ~ POST ~ body:", body);

  const { userId, name, message, mediaURL, unlockDate, createdAt, status } =
    body;

  try {
    dbConnect();
    const existingUser = await UserModel.findOne({
      email: userId,
    });
    if (!existingUser) {
      return new NextResponse(
        JSON.stringify({ status: 404, message: "User not found" })
      );
    }
    const vault: any = {
      userId: existingUser._id,
      name,
      message,
      mediaURL,
      unlockDate,
      createdAt,
      status,
    };
    existingUser.vaults.push(vault);
    await existingUser.save();
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Vault saved successfully" })
    );
  } catch (error) {
    return new NextResponse(JSON.stringify({ status: 500, message: error }));
  }

  return new NextResponse(
    JSON.stringify({ status: 200, message: "Vault saved successfully" })
  );
};
