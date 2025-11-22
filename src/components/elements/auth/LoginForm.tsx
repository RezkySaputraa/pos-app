
"use client";

import SubmitButton from "./SubmitButton";
import InputField from "./InputField";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const handleSubmit = () => {
        router.push("/admin");
    }
    return (
        <form className="flex flex-col gap-4 w-full" action={handleSubmit}>
            <div className="flex flex-col gap-4">
                <InputField title="Email" placeholder="Masukkan email" />
                <InputField title="Kata Sandi" placeholder="Masukkan kata sandi" />
            </div>
            <div className="flex flex-col gap-3 pt-5">
                <div className="flex items-center justify-between">
                    <label className="inline-flex items-center gap-2 text-sm text-white">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-white" />
                        <span>Remember me</span>
                    </label>
                    <a href="/forgot-password" className="text-sm text-white hover:underline ">
                        Forgot password?
                    </a>
                </div>
                <SubmitButton title="Login" />
                <div className="text-center text-sm text-white">
                    <label> Belum Punya Akun? <a href="/auth/register" className="font-bold hover:underline">Daftar</a></label>
                </div>
            </div>
        </form>
    );
}