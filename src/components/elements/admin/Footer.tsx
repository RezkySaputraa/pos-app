import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebookF, FaArrowRight } from "react-icons/fa6"; // Pastikan install react-icons

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* Grid Layout: 5 Kolom pada layar besar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 items-start">

                    {/* Kolom 1: Logo, Deskripsi, Kontak */}
                    <div className="lg:col-span-2 pr-8">
                        <div className="mb-6">
                            {/* Gunakan NextImage sesuai instruksi */}
                            {/* Ganti src dengan path logo 'Acara' Anda */}
                            <div className="relative w-32 h-12 mb-4">
                                <Image
                                    src="/images/general/logo.png" 
                                    alt="Acara Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        
                        <p className="text-sm leading-relaxed text-gray-200 mb-8">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                            pretium lorem Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Quisque high-quality video content.
                        </p>

                        <div>
                            <h4 className="font-semibold text-lg mb-1">Kontak</h4>
                            <p className="text-sm text-gray-200">+62 8123 3456 7890</p>
                        </div>
                    </div>

                    {/* Kolom 2: Lorem Link */}
                    <div className="space-y-4 pt-2">
                        <h4 className="font-bold text-lg">Lorem</h4>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Lorem Link */}
                    <div className="space-y-4 pt-2">
                        <h4 className="font-bold text-lg">Lorem</h4>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                            <li><Link href="#" className="hover:underline">Lorem Ipsum</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 5: Daftar & Follow Us */}
                    <div className="space-y-8 pt-2">
                        {/* Bagian Daftar */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Daftar Sekarang</h4>
                            <button className="group border border-white px-6 py-3 w-full max-w-[200px] flex items-center justify-between hover:bg-white hover:text-[#003580] transition duration-300">
                                <span className="text-sm font-medium">Daftar</span>
                                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                            </button>
                        </div>

                        {/* Bagian Follow Us */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#003580] transition">
                                    <FaInstagram size={20} />
                                </Link>
                                <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#003580] transition">
                                    <FaYoutube size={20} />
                                </Link>
                                <Link href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#003580] transition">
                                    <FaFacebookF size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Garis Horizontal di Bawah */}
                <div className="border-t border-gray-400/50 mt-8"></div>
            </div>
        </footer>
    );
}