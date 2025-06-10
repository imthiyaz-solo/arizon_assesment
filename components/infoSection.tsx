import React from "react";
import { InfoSectionProps } from "@/types";

const InfoSection: React.FC<InfoSectionProps> = ({ heading, subHeading, items, type, total = 4, width = "100%", textWidth = "100%" }) => {
    return (
        <section className="text-center px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12">
                {heading}
            </h2>
            <p className="text-md md:text-lg font-normal text-gray-500 mb-12 px-12">
                {subHeading}
            </p>
            <div className={`flex flex-wrap justify-center md:justify-start mx-auto`}
                style={{ width: width }}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full sm:w-1/2 md:w-1/${total} text-center px-4 mb-8 space-y-2`}
                    >
                        {type === "image" && typeof item.src === "string" ? (
                            <img
                                src={item.src}
                                alt={item.title}
                                className="mx-auto w-16 h-16 md:w-20 md:h-20 object-contain"
                            />
                        ) : (
                            <div className="flex justify-center text-5xl md:text-9xl text-gray-800">
                                {item.src}
                            </div>
                        )}

                        <h3 className="text-md font-bold">{item.title}</h3>
                        <p className={`text-gray-600 text-sm leading-relaxed text-center w-[${textWidth}] mx-auto`}>{item.desc}</p>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default InfoSection;
