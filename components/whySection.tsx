import React from "react";

interface WhyChooseSectionProps {
    heading: string;
    descriptions: string[];
    buttonTitle: string;
    onButtonClick: () => void;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
    heading,
    descriptions,
    buttonTitle,
    onButtonClick,
}) => {
    return (
        <section className="bg-gray-100 py-12 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">{heading}</h2>

            <div className="space-y-6 max-w-4xl mx-auto text-gray-800 text-[17px] leading-relaxed">
                {descriptions.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                ))}
            </div>

            <button
                onClick={onButtonClick}
                className="mt-10 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded transition"
            >
                {buttonTitle}
            </button>
        </section>
    );
};

export default WhyChooseSection;
