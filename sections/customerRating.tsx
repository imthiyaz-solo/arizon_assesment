import { FaStar } from "react-icons/fa";

const CustomerReviewSummary = () => {
    return (
        <div className="w-full px-4 py-8 bg-white">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-6">

                <div className="text-center md:text-left w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Customer Reviews</h2>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-lg">
                        <p className="text-gray-700">Average Customer Rating:</p>
                        <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <span className="font-bold text-gray-800">4.8/5</span>

                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                        <strong>Independent Service Rating</strong> based on <span className="font-semibold">1171</span> verified reviews.{" "}
                        <a href="#" className="text-blue-600 underline">Read all reviews</a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CustomerReviewSummary;
