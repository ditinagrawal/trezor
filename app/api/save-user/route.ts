import dbConnect from "@/lib/db";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, email, image } = await req.json();
  try {
    dbConnect();
    const user = await UserModel.create({ name, email, image });
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "User Saved Successfully",
        user,
      })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "An error occurred" })
    );
  }
};
