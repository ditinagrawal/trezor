import CreateVaultForm from "@/components/shared/CreateVaultForm";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create a vault | Trezor",
};

const CreatePage = () => {
  return (
    <>
      <Link href={"/vaults"} className="absolute top-8 left-8">
        <Button variant={"secondary"}>Go Back</Button>
      </Link>
      <div className="flex items-center justify-center h-full">
        <CreateVaultForm />
      </div>
    </>
  );
};

export default CreatePage;
