import { Metadata } from "next";
import { Search, Image as ImageIcon, Pencil, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nara | Paket & Promo",
  description: "Halaman manajemen paket dan promo",
};

// Data dummy untuk tabel
const packages = [
  {
    id: 1,
    name: "Paket Hemat Berdua",
    description: "Kopi Susu, Matcha, Kentang",
    type: "Paket", // Teks di dalam kotak ikon
    iconColor: "bg-orange-400",
    priceNormal: "Rp 57.000",
    promo: "15%",
    priceSell: "Rp 48.450",
  },
  {
    id: 2,
    name: "Catering Rapat",
    description: "Nasi Kotak Ayam Bakar x15",
    type: "Catering",
    iconColor: "bg-green-500",
    priceNormal: "Rp 450.000",
    promo: "-",
    priceSell: "Rp 450.000",
  },
];

export default function Paket() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- KOLOM KIRI: Form Buat Paket --- */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Buat Paket Baru
            </h2>

            {/* Tab Toggle */}
            <div className="flex space-x-2 mb-6">
              <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Dari Menu
              </button>
              <button className="flex-1 py-2 px-4 text-sm font-bold text-white bg-primary-700 rounded-lg shadow-md">
                Paket Kustom
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-4">
              
              {/* Nama Paket */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5">
                  Nama Paket / Promo
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Paket Hemat Berdua"
                  className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>

              {/* Kode Paket */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5">
                  Kode Paket
                </label>
                <input
                  type="text"
                  placeholder="Contoh: HEMAT-01"
                  className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5">
                  Isi / Deskripsi Paket
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Nasi Kotak Ayam Bakar x15, Puding Coklat x15"
                  className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                />
              </div>

              {/* Upload Foto */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5">
                  Foto Paket
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors">
                  <ImageIcon className="h-8 w-8 mb-2" />
                  <span className="text-xs font-medium">Unggah file</span>
                </div>
              </div>

              {/* Harga & Promo (Grid) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">
                    Harga Normal
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">
                    Promo (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>
              </div>

              {/* Harga Akhir Box */}
              <div className="bg-gray-100 rounded-lg p-4 text-center mt-4 border border-gray-200">
                <span className="block text-xs text-gray-500 mb-1">Harga Jual Akhir:</span>
                <span className="block text-lg font-bold text-gray-800">Rp 0,00</span>
              </div>

              {/* Button Simpan */}
              <button type="button" className="w-full py-3 bg-primary-700 hover:bg-primary-800 text-white text-sm font-bold rounded-lg shadow-md transition-colors mt-4">
                Simpan Paket
              </button>

            </form>
          </div>
        </div>

        {/* --- KOLOM KANAN: Daftar Paket --- */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
            
            {/* Header & Search */}
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-lg font-bold text-gray-800">
                Daftar Paket & Promo
              </h2>
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari paket..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 text-sm transition-shadow"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Paket
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Harga Normal
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Promo
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Harga Jual
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {packages.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                      
                      {/* Kolom Paket (Icon + Nama + Deskripsi) */}
                      <td className="px-6 py-4">
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-lg ${item.iconColor} flex items-center justify-center text-white text-[10px] font-bold shadow-sm mt-1`}>
                            {item.type}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 w-32 sm:w-48 lg:w-40 whitespace-normal leading-snug">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Kolom Harga Normal */}
                      <td className="px-6 py-4 whitespace-nowrap align-top pt-5">
                        <div className="text-sm text-gray-600">{item.priceNormal}</div>
                      </td>

                      {/* Kolom Promo */}
                      <td className="px-6 py-4 whitespace-nowrap align-top pt-5">
                         {item.promo !== "-" ? (
                            <span className="px-2.5 py-1 inline-flex text-xs leading-4 font-bold rounded-full bg-green-100 text-green-700">
                              {item.promo}
                            </span>
                         ) : (
                            <span className="text-sm text-gray-400">-</span>
                         )}
                      </td>

                      {/* Kolom Harga Jual */}
                      <td className="px-6 py-4 whitespace-nowrap align-top pt-5">
                        <div className="text-sm font-bold text-primary-700">{item.priceSell}</div>
                      </td>

                      {/* Kolom Aksi */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium align-top pt-4">
                        <div className="flex items-center justify-end space-x-3">
                          <button className="text-primary-600 hover:text-primary-800 transition-colors bg-blue-50 p-1.5 rounded-md">
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-700 transition-colors bg-red-50 p-1.5 rounded-md">
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
        
      </div>
    </div>
  );
}