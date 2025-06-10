import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

type Review = {
  rating: number;
  title: string;
  review: string;
  author: string;
  date: string;
};

type ReviewCarouselProps = {
  data: Review[];
};

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsToShow(1); // mobile
      } else if (width < 1024) {
        setItemsToShow(2); // tablet
      } else {
        setItemsToShow(4); // desktop
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, data.length - itemsToShow));
  };

  const visibleReviews = data.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative w-full mx-auto px-4 py-8">
      <div className="flex items-center justify-between w-[90%] m-auto border-t-1 border-gray-200">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="cursor-pointer text-2xl p-2 disabled:opacity-30"
        >
          <FaArrowLeft />
        </button>

        <div className="flex overflow-hidden w-full justify-center ">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 p-4 bg-white text-left"
            >
              <div className="flex text-yellow-400 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h3 className="font-semibold">{review.title}</h3>
              <p className="text-sm text-gray-700">{review.review}</p>
              <p className="text-sm text-gray-500 mt-2">
                {review.author} - {review.date}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= data.length - itemsToShow}
          className="cursor-pointer text-2xl p-2 disabled:opacity-30"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
