
"use client";

import SubmitButton from "./SubmitButton";
import InputField from "./InputField";

export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4 w-full px-25" action="">
            <div className="flex flex-col gap-1">
                <InputField title="Email" placeholder="Masukkan email" />
                <InputField title="Kata Sandi" placeholder="Masukkan kata sandi" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-primary focus:ring-primary" />
                        <span>Remember me</span>
                    </label>
                    <a href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                    </a>
                </div>
                <SubmitButton title="Login" />
                <div className="text-center text-sm">
                    <label> Belum Punya Akun? <a href="/auth/register" className="font-bold hover:underline">Daftar</a></label>
                </div>
            </div>

        </form>
    );
}
