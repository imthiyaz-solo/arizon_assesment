'use client';

import Link from 'next/link';
import { ProductPageProps } from '@/types';

interface Props {
    product: ProductPageProps;
    onAddToCart: (product: ProductPageProps) => void;
}

const ProductCard = ({ product, onAddToCart }: Props) => {
    return (
        <div className='rounded-lg p-4 shadow-lg hover:shadow-2xl transition flex flex-col justify-between h-full'>
            <Link href={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-48 object-contain cursor-pointer'
                />
            </Link>

            <div className='flex-grow mt-4 flex flex-col justify-between'>
                <div>
                    <h2 className='text-sm font-semibold line-clamp-2 text-left'>{product.title}</h2>
                    <p className='text-green-700 font-bold text-left mt-2'>${product.price}</p>
                </div>

                <div className='flex justify-end md:justify-start mt-4'>
                    <button
                        onClick={() => onAddToCart(product)}
                        className='cursor-pointer w-fit md:w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
