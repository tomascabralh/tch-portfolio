export default function Form() {
    return (
        <form className="flex flex-col gap-6 max-w-xl">
            <input type="text" placeholder="Name" className="bg-transparent border-b border-gray-600 py-2 outline-none" />
            <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-600 py-2 outline-none" />
            <textarea placeholder="Message" rows="4" className="bg-transparent border-b border-gray-600 py-2 outline-none" />
            <button type="submit" className="self-end mt-4 text-sm uppercase tracking-wide border-b-2 border-green-400">
                Send Message
            </button>
        </form>
    );
}
