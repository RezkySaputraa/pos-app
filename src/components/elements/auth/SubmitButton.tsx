"use client";
import "@/styles/globals.css";
export default function SubmitButton({ title }: { title: string }) {
  return (
    <div>
      <button
        className="p-3 rounded-2xl bg-accent text-white font-bold hover:opacity-85 transition-opacity w-full"
>
        {title}
      </button>
    </div>
  );
}