"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const DashPage = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <Button onClick={() => signOut()}>SignOut</Button>
    </main>
  );
};

export default DashPage;
