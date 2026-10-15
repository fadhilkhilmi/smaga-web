import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <main className="min-h-screen p-5 pt-20 md:ml-64 md:p-8">{children}</main>
    </div>
  );
}
