export default function Button({ children }) {
    return (
        <div className="flex flex-col items-center md:items-start self-end mt-4 text-sm uppercase tracking-wide">
            <button className="underline decoration-[#4EE1A0] underline-offset-12">
                {children}
            </button>
        </div>
    );
}
