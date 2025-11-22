import { Metadata } from "next";
import { 
  Search, 
  FileSpreadsheet, 
  Download, 
  Camera, 
  Trash2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nara | Menu",
  description: "Menu management page",
};

// Data dummy untuk tabel
const menuItems = [
  {
    id: 1,
    code: "MN-001",
    name: "Kopi Susu Gula Aren",
    category: "Minuman Kopi",
    price: "Rp 20.000",
    stock: 45,
    imageText: "Kopi", // Placeholder text in image
    imageColor: "bg-blue-400",
  },
  // Kamu bisa menambahkan data dummy lain di sini
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-6 font-sans">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- KOLOM KIRI: Panel Impor --- */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Impor Menu dari Excel
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Unggah file Excel untuk menambah atau memperbarui daftar menu secara massal.
            </p>

            {/* Tombol Upload */}
            <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-sm mb-4 transition-all">
              <FileSpreadsheet className="h-5 w-5 mr-2" />
              Pilih File Excel
            </button>

            {/* Link Download Template */}
            <button className="flex items-center text-sm text-primary-600 hover:text-primary-800 font-medium mb-8 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Unduh Template Excel
            </button>

            <hr className="border-gray-100 mb-6" />

            {/* Bagian Petunjuk */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3">Petunjuk:</h3>
              <ul className="space-y-3 text-sm text-gray-600 list-disc pl-4">
                <li>
                  Gunakan template yang disediakan.
                </li>
                <li>
                  Wajib diisi: <span className="bg-gray-100 px-1 rounded text-gray-800">'Kategori'</span>, <span className="bg-gray-100 px-1 rounded text-gray-800">'Kode_Menu'</span>, <span className="bg-gray-100 px-1 rounded text-gray-800">'Nama_Menu'</span>, <span className="bg-gray-100 px-1 rounded text-gray-800">'Harga'</span>.
                </li>
                <li>
                  Data akan diperbarui jika <span className="bg-gray-100 px-1 rounded text-gray-800">'Kode_Menu'</span> sama.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN: Daftar Menu --- */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Header Tabel & Search */}
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-lg font-bold text-gray-800">
                Daftar Menu
              </h2>
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari menu..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 text-sm transition-shadow"
                />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Menu
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Harga
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Stok
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {menuItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      
                      {/* Kolom Menu (Gambar + Nama) */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-12 w-12 rounded-md ${item.imageColor} flex items-center justify-center text-white text-xs font-medium shadow-sm`}>
                            {item.imageText}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900 break-words max-w-[150px] whitespace-normal">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Kolom Kategori */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{item.category}</div>
                      </td>

                      {/* Kolom Harga */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.price}</div>
                      </td>

                      {/* Kolom Stok */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{item.stock}</div>
                      </td>

                      {/* Kolom Aksi */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-primary-600 hover:text-primary-800 p-2 bg-blue-50 rounded-md transition-colors" title="Ubah Foto">
                            <Camera className="h-4 w-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-700 p-2 bg-red-50 rounded-md transition-colors" title="Hapus">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Empty State (Opsional: jika data kosong) */}
              {menuItems.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                  Belum ada menu. Silakan impor data.
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}