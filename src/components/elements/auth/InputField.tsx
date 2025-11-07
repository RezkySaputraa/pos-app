

export default function InputField({ title, placeholder }: { title: string; placeholder: string }) {
    return (
        <>
            <div className="font-regular text-lg">{title}</div>
            <input
                className="border p-3 rounded-2xl"
                placeholder={placeholder}
            />
        </>
    );
}
