import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nara | Admin Home",
  description: "Home ",
};

export default function AdminHomePage() {
  return (
    <div className="px-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* Kondisi Bulan Lalu */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-sm font-bold text-gray-800 mb-3">Kondisi Bulan Lalu</h3>
          <div className="space-y-1.5 text-xs text-gray-700">
            <p>Revenue: Rp 11.826.000</p>
            <p>Profit: Rp10.000.000</p>
            <p>BEP: 85%</p>
            <p>Cashflow: -Rp6.000.000</p>
          </div>
          <p className="text-[10px] text-gray-500 mt-3 italic leading-relaxed">
            Catatan: Tingkat bagi hasil tidak mencapai mengatung BEP target.
          </p>
        </div>

        {/* Revenue Bulan Ini */}
        <div className="bg-teal-500 text-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm font-bold mb-2">Revenue Bulan Ini</h3>
          <p className="text-2xl font-bold mb-2">Rp 110.000.000</p>
          <p className="text-[10px] opacity-95 leading-relaxed">
            Grafik ini menunjukan total penjualan produk yang terjadi ke seluruh nasabah dalam rentang periode yang telah ditentukan.
          </p>
        </div>

        {/* Profit Bersih */}
        <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm font-bold mb-2">Profit Bersih</h3>
          <p className="text-2xl font-bold mb-2">Rp17.500.000</p>
          <p className="text-[10px] opacity-95 leading-relaxed">
            Profit bersih dihitung dengan cara revenue bulan tersebut yang terjadi.
          </p>
        </div>

        {/* Target BEP */}
        <div className="bg-orange-500 text-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm font-bold mb-2">Target BEP</h3>
          <p className="text-4xl font-bold mb-2">85%</p>
          <p className="text-[10px] opacity-95 leading-relaxed">
            BEP atau Titik Impas harus dicapai.
          </p>
        </div>

        {/* Cashflow Bulanan */}
        <div className="bg-pink-600 text-white p-4 rounded-xl shadow-md">
          <h3 className="text-sm font-bold mb-2">Cashflow Bulanan</h3>
          <p className="text-2xl font-bold mb-2">- Rp5.200.000</p>
          <p className="text-[10px] opacity-95 leading-relaxed">
            Ini adalah cashflow nasabah selama.
          </p>
        </div>
      </div>

      {/* Tren Omzet & Laba Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Tren Omzet & Laba 6 Bulan Terakhir</h3>
        <div className="relative h-64">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
            <span>8000000</span>
            <span>6000000</span>
            <span>4000000</span>
            <span>2000000</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-16 h-full bg-gradient-to-b from-teal-50 via-teal-25 to-transparent rounded-lg relative">
            <div className="absolute inset-0 flex items-end justify-around pb-8 px-4">
              {[
                { month: 'Apr', height: 40 },
                { month: 'May', height: 50 },
                { month: 'Jun', height: 60 },
                { month: 'Jul', height: 70 },
                { month: 'Aug', height: 80 },
                { month: 'Sep', height: 85 }
              ].map((data) => (
                <div key={data.month} className="flex flex-col items-center flex-1 mx-1">
                  <div 
                    className="w-full bg-teal-400 rounded-t-lg transition-all hover:bg-teal-500"
                    style={{ height: `${data.height}%` }}
                  ></div>
                  <span className="text-sm text-gray-600 mt-3 font-medium">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Four Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Tren Net Profit Margin */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren Net Profit Margin (NPM)</h3>
          <div className="h-44 relative">
            <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="npmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M 0,100 L 80,80 L 160,70 L 240,85 L 320,75 L 400,80 L 400,180 L 0,180 Z"
                fill="url(#npmGradient)"
              />
              <polyline
                points="0,100 80,80 160,70 240,85 320,75 400,80"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
              />
              {[0, 80, 160, 240, 320, 400].map((x, i) => (
                <circle key={i} cx={x} cy={[100, 80, 70, 85, 75, 80][i]} r="4" fill="#3B82F6"/>
              ))}
            </svg>
            <p className="text-[10px] text-gray-500 text-center mt-3">NPM perbulan di atas 15% menunjukkan bahwa perusahaan yang baik</p>
          </div>
        </div>

        {/* Tren BEP vs Realisasi */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren BEP vs Realisasi (Dalam Rupiah)</h3>
          <div className="h-44 relative">
            <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
              <polyline
                points="0,80 80,70 160,65 240,60 320,55 400,50"
                fill="none"
                stroke="#10B981"
                strokeWidth="3"
              />
              <polyline
                points="0,90 80,85 160,80 240,75 320,70 400,68"
                fill="none"
                stroke="#EF4444"
                strokeWidth="3"
              />
              {[0, 80, 160, 240, 320, 400].map((x, i) => (
                <React.Fragment key={i}>
                  <circle cx={x} cy={[80, 70, 65, 60, 55, 50][i]} r="4" fill="#10B981"/>
                  <circle cx={x} cy={[90, 85, 80, 75, 70, 68][i]} r="4" fill="#EF4444"/>
                </React.Fragment>
              ))}
            </svg>
            <p className="text-[10px] text-gray-500 text-center mt-3">Realisasi omzet di bulan BEP atau terunggul secara penjualan dengan BEP 14 juta</p>
          </div>
        </div>

        {/* Tren Jumlah Pelanggan */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren Jumlah Pelanggan</h3>
          <div className="h-44 relative">
            <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="customerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M 0,50 L 80,48 L 160,45 L 240,43 L 320,42 L 400,40 L 400,180 L 0,180 Z"
                fill="url(#customerGradient)"
              />
              <polyline
                points="0,50 80,48 160,45 240,43 320,42 400,40"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="3"
              />
              {[0, 80, 160, 240, 320, 400].map((x, i) => (
                <circle key={i} cx={x} cy={[50, 48, 45, 43, 42, 40][i]} r="4" fill="#F59E0B"/>
              ))}
            </svg>
            <p className="text-[10px] text-gray-500 text-center mt-3">Pelanggan inti 424 orang 5 bulan terakhir dan beberapa atsan bulan mengigini cashflow</p>
          </div>
        </div>

        {/* Tren Jumlah Pesanan */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren Jumlah Pesanan</h3>
          <div className="h-44 relative">
            <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="orderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M 0,60 L 80,58 L 160,55 L 240,54 L 320,53 L 400,52 L 400,180 L 0,180 Z"
                fill="url(#orderGradient)"
              />
              <polyline
                points="0,60 80,58 160,55 240,54 320,53 400,52"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="3"
              />
              {[0, 80, 160, 240, 320, 400].map((x, i) => (
                <circle key={i} cx={x} cy={[60, 58, 55, 54, 53, 52][i]} r="4" fill="#06B6D4"/>
              ))}
            </svg>
            <p className="text-[10px] text-gray-500 text-center mt-3">Jumlah pesanan: revenue di bulan Januari percius pada 650 pesanan produk ragamnya</p>
          </div>
        </div>
      </div>

      {/* Struktur Biaya Produksi */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Struktur Biaya Produksi</h3>
        <div className="space-y-3">
          {[
            { name: 'Bahan Baku', percent: 45 },
            { name: 'Tenaga Kerja', percent: 25 },
            { name: 'Distribusi', percent: 15 },
            { name: 'Kemasan', percent: 10 },
            { name: 'Lainnya', percent: 5 }
          ].map(item => (
            <div key={item.name} className="flex items-center gap-4">
              <span className="text-xs text-gray-700 font-medium w-28">{item.name}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-7 overflow-hidden">
                <div 
                  className="bg-teal-500 h-full flex items-center justify-end pr-2 transition-all duration-500"
                  style={{ width: `${item.percent}%` }}
                >
                  <span className="text-xs text-white font-semibold">{item.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-500 mt-4 italic">Struktur di atas 15% menunjukkan cashflow seimbang</p>
      </div>

      {/* Ringkasan Produk & Strategi */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Ringkasan Produk & Strategi Berdasarkan Kuadran</h3>
        <p className="text-xs text-gray-600 mb-4">Tabel ini menilai pertumbuhan margin, kontribusi income, dan strategi bisnis dari masing-masing</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Nama Produk</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Margin Laba</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Kontribusi Revenue</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Jumlah Terjual</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Harga Jual</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Rencana Strategi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-3 font-medium">Ayam Bakar</td>
                <td className="py-3 px-3">22%</td>
                <td className="py-3 px-3">35%</td>
                <td className="py-3 px-3">4,500</td>
                <td className="py-3 px-3">Rp5.000</td>
                <td className="py-3 px-3">3. Bunia Cashlow & Promosikan</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-3 font-medium">Ayam Geprek</td>
                <td className="py-3 px-3">18%</td>
                <td className="py-3 px-3">25%</td>
                <td className="py-3 px-3">3,400</td>
                <td className="py-3 px-3">Rp7.000</td>
                <td className="py-3 px-3">4. Pertama; Promosikan & Bundling</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-3 font-medium">Gurali Mix</td>
                <td className="py-3 px-3">8%</td>
                <td className="py-3 px-3">18%</td>
                <td className="py-3 px-3">1,500</td>
                <td className="py-3 px-3">Rp9.000</td>
                <td className="py-3 px-3">1. Likin Mata Kita Tanı Evaluasi Harga & Biaya</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-3 font-medium">Ayam Krispy</td>
                <td className="py-3 px-3">12%</td>
                <td className="py-3 px-3">12%</td>
                <td className="py-3 px-3">2,100</td>
                <td className="py-3 px-3">Rp8.500</td>
                <td className="py-3 px-3">2. Tingkat; Uji coba Promosikan</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-3 font-medium">Teh Dingin</td>
                <td className="py-3 px-3">15%</td>
                <td className="py-3 px-3">8%</td>
                <td className="py-3 px-3">3,000</td>
                <td className="py-3 px-3">Rp2.000</td>
                <td className="py-3 px-3">1. Margin Rendah & Survival Dengan Evaluasi Manubdisi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 text-xs text-gray-700 space-y-1.5 bg-gray-50 p-4 rounded-lg">
          <p className="font-bold text-gray-800 mb-2">Strategi Berdasarkan Kuadran:</p>
          <p><span className="font-semibold">1. Margin Rendah; Kontribusi Tinggi:</span> Produk core → urutikan strategi permintaan juga 05%</p>
          <p><span className="font-semibold">2. Margin Rendah; Revenue Tinggi:</span> Uji coba biaya lagi --- reduceri-margin dengan chhaman selain kadar tiga</p>
          <p><span className="font-semibold">3. Margin Tinggi; Revenue Rendah: Promosi</span> - peramalan pertumbu & bundling</p>
          <p><span className="font-semibold">4. Margin Tinggi & Kontribusi Tinggi:</span> Produk ini pertahankan, pertimbangkan pemikiran pricing</p>
        </div>
      </div>

      {/* Insight Box */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-400 p-8 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-5">Insight Ekonomis & Finansial Bulan Ini</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Revenue bulan 6,7% dari bulan lalu — kemungkinan terlaat kampung nasional pemilih produk unggulan.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Profit masih baik (NPM 15,7%), namun perlu efisiensi biaya distribusi dan kemasan.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Rasir BEP/target jelafs produk utama, berikutnya teerlihat berhala profit.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Gurali Mix: margin rendah tetapi volume hingga → fokus ulik efisiensi balain atau optimisasi harga.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}