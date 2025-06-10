type Brand = {
    name: string;
    imgSrc: string;
    link: string;
};

type BrandLogosProps = {
    heading: string;
    brands: Brand[];
};

const BrandLogos: React.FC<BrandLogosProps> = ({ heading, brands }) => {
    return (
        <div className="bg-gray-100 py-10 px-4 text-center">
            <h2 className="text-xl py-4 md:text-3xl font-bold text-gray-900 md:mb-8">
                {heading}
            </h2>
            <div className="flex flex-col md:flex-row py-6 md:py-12 justify-between items-center gap-8 overflow-x-auto md:whitespace-nowrap">
                {brands.map((brand) => (
                    <a
                        key={brand.name}
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <img
                            src={brand.imgSrc}
                            alt={brand.name}
                            className=""
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BrandLogos;
