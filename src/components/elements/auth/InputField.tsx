

export default function InputField({ title, placeholder }: { title: string; placeholder: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="text-lg  text-white">{title}</div>
            <input
                className="border p-3 rounded-2xl focus:border-white bg-white focus:outline-none text-black "
                placeholder={placeholder}
            />
        </div>
    );
}
