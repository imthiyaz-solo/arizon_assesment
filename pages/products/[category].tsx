'use server';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ProductCard from '@/components/ProductCard';
import { ProductPageProps } from '@/types';

interface Props {
    products: ProductPageProps[];
    category: string;
}

export default function ProductListingPage({ products, category }: Props) {
    const addToCart = (product: ProductPageProps) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');

        const index = cart.findIndex((item: any) => item.id === product.id);
        if (index !== -1) {
            cart[index].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage')); // Notify other components like navbar
    };

    return (
        <>
            <Head>
                <title>{category} - Products</title>
            </Head>
            <div className='max-w-7xl mx-auto p-4 pt-24 md:pt-6'>
                <h1 className="text-3xl md:text-4xl rounded shadow-lg w-fit font-extrabold capitalize mb-8 text-gray-800 border-b-1 border-gray-800 p-2">
                    {category}
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>
        </>
    );

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { category } = context.params as { category: string };

    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        const res = await fetch(`${baseUrl}/products/category/${category}`);
        const products = await res.json();

        return {
            props: {
                products,
                category,
            },
        };
    } catch (error) {
        return {
            props: {
                products: [],
                category,
            },
        };
    }
};