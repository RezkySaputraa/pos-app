"use client";
import "@/styles/globals.css";
export default function SubmitButton({ title }: { title: string }) {
  return (
    <div>
      <button
        className="border p-3 rounded-2xl bg-primary text-white font-bold hover:bg-[#00476b] w-full"
      >
        {title}
      </button>
    </div>
  );
}