"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaLock, FaPlusCircle, FaBox, FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function SideBar() {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const pathname = usePathname();
    
    const isActive = (path: string) => pathname === path;
    const isDashboardActive = pathname.startsWith('/admin/dashboard') || pathname.startsWith('/admin/dashboard-menu') || pathname.startsWith('/admin/dashboard-stock');
    
    return (
        <div className="w-64 min-h-screen bg-white shadow-lg flex flex-col">
            <nav className="flex flex-col gap-2 p-6">
                <Link 
                    href="/admin" 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive('/admin') 
                            ? 'bg-accent text-white shadow-sm' 
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    <FaHome size={20} />
                    <span className="font-medium">Home</span>
                </Link>

                <div>
                    <button
                        onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                            isDashboardActive 
                                ? 'bg-accent text-white shadow-sm' 
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        <MdDashboard size={20} />
                        <span className="font-medium flex-1">Dashboard</span>
                        {isDashboardOpen ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                    </button>
                    
                    {isDashboardOpen && (
                        <div className="ml-8 mt-1 flex flex-col gap-1">
                            <Link 
                                href="/admin/dashboard-menu" 
                                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                    isActive('/admin/dashboard-menu') 
                                        ? 'bg-orange-100 text-black font-medium' 
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                Dashboard Menu
                            </Link>
                            <Link 
                                href="/admin/dashboard-stock" 
                                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                    isActive('/admin/dashboard-stock') 
                                        ? 'bg-orange-100 text-black font-medium' 
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                Dashboard Stock
                            </Link>
                        </div>
                    )}
                </div>

                <Link 
                    href="/admin/user" 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive('/admin/user') 
                            ? 'bg-accent text-white shadow-sm' 
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    <FaLock size={20} />
                    <span className="font-medium">Login Akses</span>
                </Link>

                <Link 
                    href="/admin/menu" 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive('/admin/menu') 
                            ? 'bg-accent text-white shadow-sm' 
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    <FaPlusCircle size={20} />
                    <span className="font-medium">Input Menu</span>
                </Link>

                <Link 
                    href="/admin/bundling" 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive('/admin/bundling') 
                            ? 'bg-accent text-white shadow-sm' 
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    <FaBox size={20} />
                    <span className="font-medium">Bundling & Paket</span>
                </Link>

                <Link 
                    href="/admin/profil" 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive('/admin/profil') 
                            ? 'bg-accent text-white shadow-sm' 
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    <FaUser size={20} />
                    <span className="font-medium">Profil</span>
                </Link>
            </nav>
        </div>
    );
}