import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function VaultsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:w-64 fixed hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Navbar />
        {children}
      </div>
    </>
  );
}
