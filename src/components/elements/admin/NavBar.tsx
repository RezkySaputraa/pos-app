import React from "react";
import Image from "next/image";
import { FiBell, FiGrid, FiStar } from "react-icons/fi";

export default function NavBar() {
    return (
        <div className="flex flex-row bg-primary-gradient justify-between items-center w-full text-white h-auto px-10 py-4">
            <Image
                className="p-1"
                src="/images/general/logo.png"
                alt="Logo Image"
                width={100}
                height={100}
            />
            <Image
                className="p-1"
                src="/images/general/logo.png"
                alt="Logo Image"
                width={100}
                height={100}
            />
            <div className="flex flex-row gap-5 items-center">
                <div className="flex flex-row gap-5 items-center bg-accent rounded-xl px-5 py-3">
                    <FiBell size={20} />
                    <FiGrid size={20} />
                    <FiStar size={20} />
                </div>
                <div className="flex gap-2">
                <div className="h-15 w-15 rounded-full relative justify-center items-center">
                    <Image
                        className="rounded-full h-10 w-10"
                        src="https://i.pinimg.com/1200x/cc/9b/61/cc9b61edcb92c85bfb3a6a9550174356.jpg"
                        alt="Logo Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-semibold text-lg">Admin Nara</span>
                    <span className="text-sm">Administrator</span>
                </div>
            </div>
            </div>
        </div>
    );
}