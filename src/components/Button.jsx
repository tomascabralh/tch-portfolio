export default function Button({ children, type }) {
    return (
        <div className="flex flex-col items-center md:items-start self-end mt-4 text-sm uppercase tracking-wide">
            <button type={type} className="underline decoration-[#4EE1A0] underline-offset-12 hover:text-green-400 duration-500">
                {children}
            </button>
        </div>
    );
}
