export default function Form() {
    return (
        <form className="flex flex-col gap-6 w-full">
            <input type="text" placeholder="Name" className="bg-transparent border-b border-gray-600 py-2 outline-none" />
            <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-600 py-2 outline-none" />
            <textarea placeholder="Message" rows="4" className="bg-transparent border-b border-gray-600 py-2 outline-none" />
            <div className="flex flex-col items-center self-end mt-4 text-sm uppercase tracking-wide">
                <button type="submit">
                    SEND MESSAGE
                </button>
                <div className="h-[1px] bg-green-400 w-full mt-2"></div>
            </div>
        </form>
    );
}
