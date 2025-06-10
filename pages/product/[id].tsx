'use server';

import { GetServerSideProps } from 'next';
import { ProductPageProps } from '@/types';
import Head from 'next/head';
import { addToCart } from '@/utils/cart';

export default function ProductPage({ product }: { product: ProductPageProps }) {

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <>
            <Head>
                <title>{product.title} | Product Detail</title>
            </Head>
            <div className='max-w-6xl mx-auto p-6 pt-24 md:pt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 flex justify-center'>

                    <div className='flex justify-center'>
                        <div className='w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-lg shadow-md p-4 overflow-hidden flex items-center justify-center bg-white'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className='object-contain h-full w-full'
                            />
                        </div>
                    </div>


                    <div>
                        <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>{product.title}</h1>
                        <p className='text-gray-700 mb-4 text-center md:text-left'>{product.description}</p>

                        <div className='flex flex-col'>
                            <p className='text-2xl font-semibold text-center md:text-left text-green-700 mb-6'>
                                ${product.price}
                            </p>
                            <div className='flex justify-center md:justify-start'>
                                <button
                                    onClick={handleAddToCart}
                                    className='cursor-pointer w-fit bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string };

    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        const res = await fetch(`${baseUrl}/products/${id}`);
        const product = await res.json();

        return {
            props: {
                product,
            },
        };
    } catch (error) {
        return {
            props: {
                product: {},
            },
        };
    }
};
