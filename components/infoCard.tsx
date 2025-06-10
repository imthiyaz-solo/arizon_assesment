import React from 'react';
import { InfoCardProps } from '@/types';

const InfoCard: React.FC<InfoCardProps> = ({ data }) => {
    return (
        <div className="shadow-lg rounded-lg p-4 mx-auto">
            <div className="flex space-x-20 justify-center items-center flex-wrap gap-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 w-[200px] break-words">
                        <span className="text-3xl text-gary-600">{item.src}</span>
                        <span className="text-sm md:text-base font-semibold">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoCard;
