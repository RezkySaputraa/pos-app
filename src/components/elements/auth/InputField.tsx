

export default function InputField({ title, placeholder }: { title: string; placeholder: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="font-regular text-lg">{title}</div>
            <input
                className="border p-3 rounded-2xl focus:border-primary focus:outline-none"
                placeholder={placeholder}
            />
        </div>
    );
}
