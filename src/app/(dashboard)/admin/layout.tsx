import NavBar from "@/components/elements/admin/NavBar";
import SideBar from "@/components/elements/admin/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <div className="flex flex-row ">
        <SideBar />
        {children}

      </div>
    </div>
  );
}
