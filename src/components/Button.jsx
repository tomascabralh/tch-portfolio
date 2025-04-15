export default function Button({ children }) {
    return (
        <button className="mt-6 border-b-2 border-green-400 text-white uppercase tracking-wide text-sm">
            {children}
        </button>
    );
}
