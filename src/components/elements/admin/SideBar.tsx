"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaLock, FaPlusCircle, FaBox, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function SideBar() {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    return (
        <div className="w-64  min-h-screen bg-primary-gradient-topdown text-white flex flex-col p-5">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-3 px-4 py-3 hover:bg-primary-600 rounded-lg transition-colors">
                    <FaHome size={24} />
                    <span className="text-lg font-semibold">Home</span>
                </Link>
                <div>
                    <button
                        onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-primary-600 rounded-lg transition-colors w-full text-left"
                    >
                        <MdDashboard size={24} />
                        <span className="text-lg font-semibold">Dashboard</span>
                        <span className="ml-auto">{isDashboardOpen ? "▼" : "▶"}</span>
                    </button>
                    
                    {isDashboardOpen && (
                        <div className="ml-12 mt-2 flex flex-col gap-2 rounded-lg p-2">
                            <Link href="/admin/overview" className="px-4 py-2 hover:bg-primary-600 rounded transition-colors">
                                Dashboard Overview
                            </Link>
                            <Link href="/admin/menu" className="px-4 py-2 hover:bg-primary-600 rounded transition-colors">
                                Dashboard Menu
                            </Link>
                            <Link href="/admin/stock" className="px-4 py-2 hover:bg-primary-600 rounded transition-colors">
                                Dashboard Stock
                            </Link>
                        </div>
                    )}
                </div>

                <Link href="/admin/user" className="flex items-center gap-3 px-4 py-3 hover:bg-primary-600 rounded-lg transition-colors">
                    <FaLock size={24} />
                    <span className="text-lg font-semibold">Login Akses</span>
                </Link>

                <Link href="/admin/menu" className="flex items-center gap-3 px-4 py-3 hover:bg-primary-600 rounded-lg transition-colors">
                    <FaPlusCircle size={24} />
                    <span className="text-lg font-semibold">Input Menu</span>
                </Link>

                <Link href="/admin/bundling" className="flex items-center gap-3 px-4 py-3 hover:bg-primary-600 rounded-lg transition-colors">
                    <FaBox size={24} />
                    <span className="text-lg font-semibold">Bundling & Paket</span>
                </Link>

                <Link href="/admin/profil" className="flex items-center gap-3 px-4 py-3 hover:bg-primary-600 rounded-lg transition-colors">
                    <FaUser size={24} />
                    <span className="text-lg font-semibold">Profil</span>
                </Link>
            </nav>
        </div>
    );
}