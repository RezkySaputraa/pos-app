import NavBar from "@/components/elements/admin/NavBar";
import SideBar from "@/components/elements/admin/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary" >
      <NavBar />
      <div className="flex flex-row ">
        <SideBar />
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
