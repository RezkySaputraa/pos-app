import { Metadata } from "next";
import { MapPin, Upload } from "lucide-react"; // Menggunakan lucide-react untuk ikon

export const metadata: Metadata = {
  title: "Nara | Profil",
  description: "Halaman pengaturan profil usaha",
};

export default function Profil() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-6 sm:p-8 font-sans">
      
      {/* --- TAB NAVIGATION --- */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        <button className="px-4 py-2 text-sm font-bold text-primary-600 border-b-2 border-primary-600 whitespace-nowrap">
          Informasi Umum
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap transition-colors">
          Akun Saya
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap transition-colors">
          Keamanan
        </button>
      </div>

      {/* --- KARTU FORMULIR --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        
        {/* Bagian 1: Detail Usaha */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-gray-800 mb-6">
            Detail Usaha Anda
          </h3>

          {/* Logo Upload */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 mb-2">
              Logo Usaha
            </label>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                Logo
              </div>
              <button className="px-4 py-1.5 border border-gray-300 rounded-md text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors bg-white">
                Ganti
              </button>
            </div>
          </div>

          {/* Input Grid: Nama & Telepon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">
                Nama Usaha
              </label>
              <input
                type="text"
                defaultValue="NAMA UMKM"
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">
                Nomor Telepon
              </label>
              <input
                type="text"
                defaultValue="081234567890"
                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-100 my-8" />

        {/* Bagian 2: Alamat Usaha */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-gray-800 mb-6">
            Alamat Usaha
          </h3>

          {/* Grid Provinsi & Kota */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">
                Provinsi
              </label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm appearance-none bg-white">
                  <option>Kalimantan Selatan</option>
                  <option>DKI Jakarta</option>
                  <option>Jawa Barat</option>
                </select>
                {/* Custom Chevron Icon for Select */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">
                Kabupaten/Kota
              </label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm appearance-none bg-white">
                  <option>Kota Banjarmasin</option>
                  <option>Kota Banjarbaru</option>
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Kecamatan & Kelurahan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">
                Kecamatan
              </label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm appearance-none bg-white">
                  <option>Banjarmasin Tengah</option>
                  <option>Banjarmasin Utara</option>
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">
                Kelurahan
              </label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm appearance-none bg-white">
                  <option>Gadang</option>
                  <option>Melayu</option>
                </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Alamat Lengkap */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-gray-500 mb-2">
              Alamat Lengkap
            </label>
            <textarea
              rows={3}
              placeholder="Contoh: Jl. Ahmad Yani Km. 5 No. 123, RT 01 RW 02"
              className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-sm resize-none"
            />
          </div>

           {/* Google Maps Button/Input */}
           <div className="mb-4">
            <button type="button" className="w-full flex items-center px-3 py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors group shadow-sm">
               <MapPin className="h-5 w-5 text-primary-700 mr-3" />
               <span className="text-sm font-bold text-gray-500 group-hover:text-gray-700">
                 Pilih Lokasi di Peta (Google Maps)
               </span>
            </button>
          </div>
        </div>

        {/* Footer Button */}
        <div className="flex justify-end pt-4">
          <button className="px-6 py-2.5 bg-primary-700 hover:bg-primary-800 text-white text-sm font-bold rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
            Simpan Perubahan
          </button>
        </div>

      </div>
    </div>
  );
}