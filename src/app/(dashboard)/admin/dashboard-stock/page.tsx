"use client";

import React from "react";
import {
    Search,
    Plus,
    Filter,
    Package,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight,
    MoreHorizontal,
    RefreshCw,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";

// --- DATA DUMMY ---

// 1. Data Statistik Atas
const stats = [
    {
        title: "Total Item SKU",
        value: "124",
        sub: "+4 item baru bulan ini",
        icon: Package,
        color: "bg-blue-500"
    },
    {
        title: "Stok Menipis",
        value: "8",
        sub: "Perlu restock segera",
        icon: AlertTriangle,
        color: "bg-orange-500"
    },
    {
        title: "Barang Masuk (Mingguan)",
        value: "1,240",
        sub: "+12% dari minggu lalu",
        icon: ArrowDownRight,
        color: "bg-green-500"
    },
    {
        title: "Barang Keluar (Mingguan)",
        value: "985",
        sub: "Sesuai target penjualan",
        icon: ArrowUpRight,
        color: "bg-red-500"
    },
];

// 2. Data Grafik Pergerakan Stok (Masuk vs Keluar)
const movementData = [
    { day: 'Sen', in: 40, out: 24 },
    { day: 'Sel', in: 30, out: 13 },
    { day: 'Rab', in: 20, out: 58 },
    { day: 'Kam', in: 27, out: 39 },
    { day: 'Jum', in: 18, out: 48 },
    { day: 'Sab', in: 23, out: 38 },
    { day: 'Min', in: 34, out: 43 },
];

// 3. Data Pie Chart Kategori
const categoryData = [
    { name: 'Bahan Baku', value: 45 },
    { name: 'Kemasan', value: 25 },
    { name: 'Produk Jadi', value: 30 },
];
const COLORS = ['#3B82F6', '#F59E0B', '#10B981'];

// 4. Data Tabel Stok
const stockItems = [
    {
        id: 1,
        name: "Biji Kopi Arabika",
        sku: "RM-001",
        category: "Bahan Baku",
        stock: 12,
        minStock: 10,
        unit: "Kg",
        lastUpdate: "2 Jam yang lalu",
        status: "Aman", // Logic: stock > minStock
    },
    {
        id: 2,
        name: "Susu UHT Full Cream",
        sku: "RM-002",
        category: "Bahan Baku",
        stock: 5,
        minStock: 15,
        unit: "Karton",
        lastUpdate: "1 Hari yang lalu",
        status: "Menipis", // Logic: stock < minStock
    },
    {
        id: 3,
        name: "Cup Plastik 16oz",
        sku: "PK-001",
        category: "Kemasan",
        stock: 500,
        minStock: 100,
        unit: "Pcs",
        lastUpdate: "3 Hari yang lalu",
        status: "Aman",
    },
    {
        id: 4,
        name: "Sirup Vanila",
        sku: "RM-005",
        category: "Bahan Baku",
        stock: 0,
        minStock: 5,
        unit: "Botol",
        lastUpdate: "1 Minggu yang lalu",
        status: "Habis", // Logic: stock === 0
    },
    {
        id: 5,
        name: "Sedotan Steril",
        sku: "PK-003",
        category: "Kemasan",
        stock: 1200,
        minStock: 200,
        unit: "Pcs",
        lastUpdate: "Baru saja",
        status: "Aman",
    },
];

export default function StockDashboard() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] p-6 font-sans pb-20">

            {/* --- STATS CARDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{item.title}</p>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">{item.value}</h3>
                            <p className="text-[11px] text-gray-400">{item.sub}</p>
                        </div>
                        <div className={`h-10 w-10 rounded-lg ${item.color} bg-opacity-10 flex items-center justify-center text-white`}>
                            {/* Icon wrapper with opacity trick if needed, or just solid color */}
                            <div className={`p-2 rounded-lg ${item.color}`}>
                                <item.icon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- CHARTS SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

                {/* Chart 1: Pergerakan Stok (Bar Chart) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Pergerakan Stok (7 Hari Terakhir)</h3>
                        <select className="text-xs border border-gray-300 rounded-md px-2 py-1 text-gray-600 bg-white outline-none">
                            <option>Minggu Ini</option>
                            <option>Bulan Ini</option>
                        </select>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={movementData} barSize={12}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                                <Tooltip
                                    cursor={{ fill: '#f9fafb' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar name="Masuk" dataKey="in" fill="#10B981" radius={[4, 4, 0, 0]} />
                                <Bar name="Keluar" dataKey="out" fill="#EF4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Chart 2: Komposisi Kategori (Pie Chart) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Komposisi Stok</h3>
                    <p className="text-xs text-gray-500 mb-6">Proporsi berdasarkan kategori item.</p>
                    <div className="h-[220px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                            <span className="text-2xl font-bold text-gray-800">100%</span>
                            <span className="text-[10px] text-gray-400">Total Aset</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MAIN TABLE SECTION --- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Table Toolbar */}
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm font-bold text-primary-700 bg-primary-50 rounded-lg border border-primary-100">
                            Semua Stok
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                            Menipis (8)
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors">
                            Habis (2)
                        </button>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari nama item, SKU..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 outline-none"
                            />
                        </div>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600">
                            <Filter className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Item / SKU</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kategori</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Level Stok</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Satuan</th>
                                <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {stockItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">

                                    {/* Item Name */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center text-gray-400">
                                                <Package className="h-5 w-5" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-bold text-gray-900">{item.name}</div>
                                                <div className="text-xs text-gray-500 font-mono">{item.sku}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Category */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                                            {item.category}
                                        </span>
                                    </td>

                                    {/* Stock Level (with Progress Bar) */}
                                    <td className="px-6 py-4 whitespace-nowrap align-middle">
                                        <div className="w-32">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-bold text-gray-700">{item.stock}</span>
                                                <span className="text-gray-400">Min: {item.minStock}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                                <div
                                                    className={`h-1.5 rounded-full ${item.status === 'Habis' ? 'bg-red-500' :
                                                            item.status === 'Menipis' ? 'bg-orange-500' : 'bg-green-500'
                                                        }`}
                                                    style={{ width: `${item.stock === 0 ? 0 : Math.min((item.stock / (item.minStock * 2)) * 100, 100)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Unit */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {item.unit}
                                    </td>

                                    {/* Status Badge */}
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full 
                      ${item.status === 'Aman' ? 'bg-green-100 text-green-700' :
                                                item.status === 'Menipis' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-red-100 text-red-700'}`}>
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-gray-400 hover:text-primary-600 transition-colors">
                                            <MoreHorizontal className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer (Static) */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Menampilkan 1-5 dari 124 item</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs border rounded hover:bg-white disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 text-xs border rounded hover:bg-white">Next</button>
                    </div>
                </div>

                {/* ---Insight Stock & Strategi Produk --- */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-5 w-5 text-orange-600" />
                        <h2 className="text-lg font-bold text-gray-800">Insight Stock & Strategi Pembelian Stok</h2>
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
        </div>
    );
}