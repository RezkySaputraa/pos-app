
"use client";

import SubmitButton from "./SubmitButton";
import InputField from "./InputField";

export default function RegisterForm() {
    return (
<form className="flex flex-col gap-4 w-full" action="">
            <div className="flex flex-col gap-4">
                <InputField title="Nama Lengkap" placeholder="Masukkan nama lengkap" />
                <InputField title="Email" placeholder="Masukkan email" />
                <InputField title="Nomor WhatsApp" placeholder="Masukkan nomor whatsapp" />
                <InputField title="Kata Sandi" placeholder="Masukkan kata sandi" />
            </div>
            <div className="flex flex-col gap-3 pt-5">
                <div className="flex items-center justify-between">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-primary focus:ring-primary" />
                        <span>Dengan mendaftar, saya menyatakan telah membaca dan
                            menyetujui <a href="#" className="font-bold hover:underline">Ketentuan Layanan & Kebijakan Privasi</a> NARA.</span>
                    </label>
                </div>
                <SubmitButton title="Daftar" />
                <div className="text-center text-sm">
                    <label> sudah Punya Akun? <a href="/auth/login" className="font-bold hover:underline">Masuk</a></label>
                </div>
            </div>
        </form>
    );
}
