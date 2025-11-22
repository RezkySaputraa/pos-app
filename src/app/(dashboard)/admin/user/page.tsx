import { Metadata } from "next";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nara | User",
  description: "User management page",
};

// Data dummy sesuai gambar
const users = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi.s@example.com",
    role: "Admin",
    status: "Aktif",
    avatarColor: "bg-blue-400", // Warna avatar Budi
    initial: "B",
  },
  {
    id: 2,
    name: "Citra Lestari",
    email: "citra.l@example.com",
    role: "Kasir",
    status: "Aktif",
    avatarColor: "bg-green-400", // Warna avatar Citra
    initial: "C",
  },
  {
    id: 3,
    name: "Dewi Anggraini",
    email: "dewi.a@example.com",
    role: "Kasir",
    status: "Tidak Aktif",
    avatarColor: "bg-yellow-400", // Warna avatar Dewi
    initial: "D",
  },
   {
    id: 4,
    name: "Nikolas",
    email: "nikolas@example.com",
    role: "Kasir",
    status: "Tidak Aktif",
    avatarColor: "bg-red-400", // Warna avatar Dewi
    initial: "N",
  },
];

export default function User() {
  return (
    <div className="h-fit bg-white p-8 font-sans">
      {/* Header Section: Pencarian & Tombol Tambah */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        
        {/* Search Bar */}
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari pengguna..."
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 sm:text-sm shadow-sm"
          />
        </div>

        {/* Add User Button */}
        <button className="w-full sm:w-auto flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-md transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Tambah Pengguna Baru
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Nama Pengguna
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Peran
                </th>
                <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  {/* Kolom Nama Pengguna */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-bold`}>
                        {user.initial}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>

                  {/* Kolom Email */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>

                  {/* Kolom Peran (Badge) */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === "Admin"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-700" // Menggunakan kuning sesuai gambar untuk Kasir
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Kolom Status (Badge) */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === "Aktif"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Kolom Aksi */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <button className="text-primary-500 hover:text-primary-700 bg-blue-50 p-1.5 rounded-md transition-colors">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 bg-red-50 p-1.5 rounded-md transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}