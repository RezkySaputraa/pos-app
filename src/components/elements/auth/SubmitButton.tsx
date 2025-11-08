"use client";
import "@/styles/globals.css";
export default function SubmitButton({ title }: { title: string }) {
  return (
    <div>
      <button
        className="border p-3 rounded-2xl bg-primary-gradient text-white font-bold hover:opacity-90 transition-opacity w-full"
      >
        {title}
      </button>
    </div>
  );
}