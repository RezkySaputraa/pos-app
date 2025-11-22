"use client"; // Wajib digunakan karena Recharts menggunakan interaksi browser

import { Metadata } from "next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { TrendingUp, AlertCircle, ArrowRight } from "lucide-react";

// --- DATA DUMMY ---

// 1. Data Bar Chart (Revenue vs Profit)
const salesData = [
  { name: "Kopi Botol", revenue: 3000000, profit: 800000 },
  { name: "Donat Mini", revenue: 2500000, profit: 600000 },
  { name: "Keripik Kentang", revenue: 2000000, profit: 400000 },
  { name: "Keripik Pisang", revenue: 1600000, profit: 300000 },
  { name: "Teh Dingin", revenue: 1000000, profit: 200000 },
];

// 2. Data Tabel Strategi Kuadran
const strategyData = [
  {
    product: "Kopi Botol",
    margin: "22%",
    contribution: "35%",
    sold: "8,500",
    price: "Rp 15.000",
    strategy: "Juara Untung: Pertahankan Kualitas",
    status: "success", // Hijau
  },
  {
    product: "Keripik Kentang",
    margin: "10%",
    contribution: "25%",
    sold: "7,400",
    price: "Rp 12.000",
    strategy: "Potensi Promosi & Bundling",
    status: "warning", // Kuning
  },
  {
    product: "Donat Mini",
    margin: "8%",
    contribution: "20%",
    sold: "9,100",
    price: "Rp 5.000",
    strategy: "Laku Keras tapi Tipis: Evaluasi Harga",
    status: "danger", // Merah/Orange
  },
];

// 3. Data Market Basket Analysis
const basketData = [
  { menu1: "Kopi Botol", menu2: "Donat Mini", confidence: "75%", lift: "1.20" },
  { menu1: "Keripik Kentang", menu2: "Teh Dingin", confidence: "60%", lift: "1.10" },
  { menu1: "Keripik Pisang", menu2: "Kopi Botol", confidence: "45%", lift: "0.90" },
];

// 4. Data Line Chart (Lifecycle Trend)
const trendData = [
  { month: "Jul", Kopi: 14000, Donat: 12000, Keripik: 8000 },
  { month: "Aug", Kopi: 15000, Donat: 12500, Keripik: 7500 },
  { month: "Sep", Kopi: 14500, Donat: 11000, Keripik: 7000 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-6 font-sans space-y-6">
      
      {/* --- SECTION 1: Top Selling Products (Bar Chart) --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-1">Top Selling Products (Revenue vs Profit)</h2>
        <p className="text-xs text-gray-500 mb-6">Produk dengan penjualan tinggi tapi margin tipis memerlukan evaluasi harga.</p>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ fill: '#f3f4f6' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar name="Revenue" dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar name="Profit" dataKey="profit" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- SECTION 2: Tabel Strategi Kuadran --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Ringkasan Produk & Strategi Berdasarkan Kuadran</h2>
          <p className="text-xs text-gray-500">Menampilkan perbandingan margin, kontribusi revenue, dan strategi bisnis tiap produk.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider text-xs">Nama Produk</th>
                <th className="px-6 py-3 text-right font-bold text-gray-500 uppercase tracking-wider text-xs">Margin Laba</th>
                <th className="px-6 py-3 text-right font-bold text-gray-500 uppercase tracking-wider text-xs">Kontribusi</th>
                <th className="px-6 py-3 text-right font-bold text-gray-500 uppercase tracking-wider text-xs">Jumlah Terjual</th>
                <th className="px-6 py-3 text-right font-bold text-gray-500 uppercase tracking-wider text-xs">Harga Jual</th>
                <th className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider text-xs">Kualitas Strategi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {strategyData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.product}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{item.margin}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{item.contribution}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{item.sold}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{item.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${item.status === 'success' ? 'bg-green-100 text-green-800' : 
                        item.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {item.strategy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- SECTION 3: Market Basket Analysis --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Market Basket Analysis</h2>
          <p className="text-xs text-gray-500">Gunakan pasangan dengan confidence tinggi untuk membuat paket promo.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider text-xs">Menu 1</th>
                <th className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider text-xs">Menu 2</th>
                <th className="px-6 py-3 text-right font-bold text-gray-500 uppercase tracking-wider text-xs">Confidence</th>
                <th className="px-6 py-3 text-right font-bold text-gray-500 uppercase tracking-wider text-xs">Lift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {basketData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.menu1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{item.menu2}</td>
                  <td className="px-6 py-4 text-right text-gray-600">{item.confidence}</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800">{item.lift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- SECTION 4: Product Lifecycle Trend (Line Chart) --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Product Lifecycle Trend (3 Bulan Terakhir)</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} padding={{ left: 20, right: 20 }} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 'auto']} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
              <Line type="monotone" dataKey="Kopi" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Donat" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Keripik" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-400 mt-4 italic">
          Perhatian: produk dengan tren penurunan stabil → indikasi memasuki fase maturity, perlu promo reaktif.
        </p>
      </div>

      {/* --- SECTION 5: Insight Ekonomi & Strategi Produk --- */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-orange-600" />
          <h2 className="text-lg font-bold text-gray-800">Insight Ekonomi & Strategi Produk</h2>
        </div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 mt-0.5 text-orange-500" />
            <span><span className="font-bold">Donat dan Kopi</span> sering dibeli bersama — buat paket "Sarapan Hemat".</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 mt-0.5 text-orange-500" />
            <span><span className="font-bold">Keripik</span> mengalami penurunan 12% dalam 3 bulan, periksa stok dan promosi.</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 mt-0.5 text-orange-500" />
            <span>Produk <span className="font-bold">Top 3</span> menyumbang 75% laba, optimalkan produksi & visibilitas.</span>
          </li>
        </ul>
      </div>

    </div>
  );
}