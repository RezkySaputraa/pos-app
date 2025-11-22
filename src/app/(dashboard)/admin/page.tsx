"use client";

import { Metadata } from "next";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  Cell
} from "recharts";

// Metadata tidak bisa diexport dari Client Component, 
// jadi biasanya diletakkan di file layout.tsx atau page wrapper.
// Namun untuk snippet ini, kita fokus pada konten halaman.

// --- DATA DUMMY ---

const trendOmzetData = [
  { month: 'Apr', value: 4000000 },
  { month: 'May', value: 5000000 },
  { month: 'Jun', value: 6000000 },
  { month: 'Jul', value: 7000000 },
  { month: 'Aug', value: 8000000 },
  { month: 'Sep', value: 8500000 },
];

const npmData = [
  { name: '1', value: 18 },
  { name: '2', value: 16 },
  { name: '3', value: 15 },
  { name: '4', value: 17 },
  { name: '5', value: 16 },
  { name: '6', value: 16.5 },
];

const bepData = [
  { name: '1', bep: 14000000, realisasi: 12000000 },
  { name: '2', bep: 14000000, realisasi: 13000000 },
  { name: '3', bep: 14000000, realisasi: 13500000 },
  { name: '4', bep: 14000000, realisasi: 14500000 }, // Crossing point
  { name: '5', bep: 14000000, realisasi: 15000000 },
  { name: '6', bep: 14000000, realisasi: 16000000 },
];

const customerData = [
  { name: '1', value: 450 },
  { name: '2', value: 445 },
  { name: '3', value: 440 },
  { name: '4', value: 430 },
  { name: '5', value: 425 },
  { name: '6', value: 424 },
];

const orderData = [
  { name: '1', value: 650 },
  { name: '2', value: 640 },
  { name: '3', value: 620 },
  { name: '4', value: 610 },
  { name: '5', value: 600 },
  { name: '6', value: 590 },
];

const costStructureData = [
  { name: 'Bahan Baku', value: 45 },
  { name: 'Tenaga Kerja', value: 25 },
  { name: 'Distribusi', value: 15 },
  { name: 'Kemasan', value: 10 },
  { name: 'Lainnya', value: 5 },
];

// Custom Tooltip untuk chart kecil
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 p-2 rounded shadow-md text-xs">
        <p className="font-bold">{`Data: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function AdminHomePage() {
  return (
    <div className="px-6 bg-gray-50 min-h-screen font-sans pb-10">
      
      {/* --- GRID KARTU ATAS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 pt-6">
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
            Grafik ini menunjukan total penjualan produk yang terjadi ke seluruh nasabah.
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
            Ini adalah cashflow nasabah selama periode berjalan.
          </p>
        </div>
      </div>

      {/* --- CHART 1: TREN OMZET & LABA --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Tren Omzet & Laba 6 Bulan Terakhir</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trendOmzetData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTeal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity={1}/> {/* teal-400 */}
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.8}/> {/* teal-500 */}
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#6b7280' }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#6b7280' }} 
                tickFormatter={(value) => `${value / 1000000}jt`}
              />
              <Tooltip 
                cursor={{ fill: '#f9fafb' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`Rp ${value.toLocaleString()}`, 'Omzet']}
              />
              <Bar 
                dataKey="value" 
                fill="url(#colorTeal)" 
                radius={[8, 8, 0, 0]} 
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- GRID 4 CHART KECIL --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        
        {/* 1. Tren Net Profit Margin (Area Chart) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren Net Profit Margin (NPM)</h3>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={npmData}>
                <defs>
                  <linearGradient id="npmGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#npmGradient)" 
                  dot={{ r: 4, fill: "#3B82F6", strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-3">NPM perbulan di atas 15% menunjukkan perusahaan yang baik</p>
        </div>

        {/* 2. Tren BEP vs Realisasi (Line Chart) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren BEP vs Realisasi</h3>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bepData}>
                <Tooltip 
                   contentStyle={{ fontSize: '12px' }}
                   formatter={(value: number) => `Rp ${value / 1000000}jt`}
                />
                <Line type="monotone" dataKey="realisasi" stroke="#10B981" strokeWidth={3} dot={{r:4}} name="Realisasi"/>
                <Line type="monotone" dataKey="bep" stroke="#EF4444" strokeWidth={3} dot={{r:4}} name="Target BEP"/>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-3">Realisasi omzet melampaui BEP (14 Juta) di bulan ke-4</p>
        </div>

        {/* 3. Tren Jumlah Pelanggan (Area Chart Orange) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren Jumlah Pelanggan</h3>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={customerData}>
                <defs>
                  <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  fill="url(#customerGradient)" 
                  dot={{ r: 4, fill: "#F59E0B", strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-3">Pelanggan inti 424 orang 5 bulan terakhir, tren sedikit menurun</p>
        </div>

        {/* 4. Tren Jumlah Pesanan (Area Chart Cyan/Teal) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-base font-bold text-gray-800 mb-4">Tren Jumlah Pesanan</h3>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={orderData}>
                <defs>
                  <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#06B6D4" 
                  strokeWidth={3}
                  fill="url(#orderGradient)" 
                  dot={{ r: 4, fill: "#06B6D4", strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-gray-500 text-center mt-3">Jumlah pesanan menurun dari 650 menjadi 590 dalam periode ini</p>
        </div>
      </div>

      {/* --- STRUKTUR BIAYA PRODUKSI (Bar Chart Horizontal) --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Struktur Biaya Produksi</h3>
        <div className="h-60 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart 
                layout="vertical" 
                data={costStructureData} 
                margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
                barSize={24}
              >
               <XAxis type="number" hide />
               <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  width={100}
                  tick={{ fontSize: 12, fill: '#374151', fontWeight: 500 }}
               />
               <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '8px' }}
               />
               <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {costStructureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#14b8a6" /> // Teal-500
                  ))}
               </Bar>
             </BarChart>
           </ResponsiveContainer>
        </div>
        <p className="text-[10px] text-gray-500 mt-2 italic">Struktur biaya bahan baku 45% adalah komponen terbesar.</p>
      </div>

      {/* --- TABEL RINGKASAN PRODUK --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Ringkasan Produk & Strategi Berdasarkan Kuadran</h3>
        <p className="text-xs text-gray-600 mb-4">Tabel ini menilai pertumbuhan margin, kontribusi income, dan strategi bisnis.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Nama Produk</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Margin Laba</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Kontribusi</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Terjual</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Harga</th>
                <th className="text-left py-2.5 px-3 font-bold text-gray-700">Rencana Strategi</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Ayam Bakar", margin: "22%", contrib: "35%", sold: "4,500", price: "Rp5.000", strat: "3. Jaga Cashflow & Promosikan" },
                { name: "Ayam Geprek", margin: "18%", contrib: "25%", sold: "3,400", price: "Rp7.000", strat: "4. Pertahankan; Promosi & Bundling" },
                { name: "Gurali Mix", margin: "8%", contrib: "18%", sold: "1,500", price: "Rp9.000", strat: "1. Evaluasi Harga & Biaya" },
                { name: "Ayam Krispy", margin: "12%", contrib: "12%", sold: "2,100", price: "Rp8.500", strat: "2. Tingkatkan; Uji coba Promosi" },
                { name: "Teh Dingin", margin: "15%", contrib: "8%", sold: "3,000", price: "Rp2.000", strat: "1. Margin Rendah; Evaluasi Produksi" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-3 font-medium">{row.name}</td>
                  <td className="py-3 px-3">{row.margin}</td>
                  <td className="py-3 px-3">{row.contrib}</td>
                  <td className="py-3 px-3">{row.sold}</td>
                  <td className="py-3 px-3">{row.price}</td>
                  <td className="py-3 px-3">{row.strat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 text-xs text-gray-700 space-y-1.5 bg-gray-50 p-4 rounded-lg">
          <p className="font-bold text-gray-800 mb-2">Strategi Berdasarkan Kuadran:</p>
          <p><span className="font-semibold">1. Margin Rendah; Kontribusi Tinggi:</span> Produk core → pertahankan volume.</p>
          <p><span className="font-semibold">2. Margin Rendah; Revenue Tinggi:</span> Uji coba biaya lagi → efisiensi margin.</p>
          <p><span className="font-semibold">3. Margin Tinggi; Revenue Rendah:</span> Promosi agresif & bundling.</p>
          <p><span className="font-semibold">4. Margin Tinggi & Kontribusi Tinggi:</span> Produk bintang, pertahankan pricing.</p>
        </div>
      </div>

      {/* --- INSIGHT BOX --- */}
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-400 p-8 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-5">Insight Ekonomis & Finansial Bulan Ini</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Revenue naik 6,7% dari bulan lalu — kemungkinan efek kampanye produk unggulan.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Profit masih baik (NPM 15,7%), namun perlu efisiensi biaya distribusi dan kemasan.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Target BEP produk utama tercapai, fokus berikutnya adalah peningkatan profit margin.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-600 font-bold text-lg">•</span>
            <span className="leading-relaxed">Gurali Mix: margin rendah tetapi volume tinggi → fokus efisiensi bahan baku.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}