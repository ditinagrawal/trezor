"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const VaultsPage = () => {
  return (
    <main>
      <h1>Vaults</h1>
      <Button onClick={() => signOut()}>SignOut</Button>
    </main>
  );
};

export default VaultsPage;
