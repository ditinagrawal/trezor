import { Metadata } from "next";
import Vaults from "./_components/Vaults";

export const metadata: Metadata = {
  title: "Vaults | Trezor",
};

const VaultsPage = () => {
  return (
    <main>
      <Vaults />
    </main>
  );
};

export default VaultsPage;
