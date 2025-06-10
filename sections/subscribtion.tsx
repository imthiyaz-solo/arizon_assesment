const Subscribe = () => {
    return (
        <div className="bg-[#1b2644] text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className="text-2xl font-bold whitespace-nowrap">Subscribe Today</h2>

                <p className="text-sm text-center md:text-left max-w-xl">
                    Be the first to know about <span className="font-semibold">exclusive deals</span>, new product lines,
                    company announcements, and industry news.
                </p>

                <form className="flex w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-2 text-gray-700 bg-white placeholder-gray-500"
                    />
                    <button
                        type="button"
                        className="cursor-pointer bg-[#d19c21] text-white font-bold px-5 py-2 hover:bg-yellow-600 transition-colors"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
