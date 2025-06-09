'use client';

import { useEffect, useState } from 'react';
import { ProductPageLocalStorage } from '@/types';
import Head from 'next/head';

const Cart = () => {
    const [cart, setCart] = useState<ProductPageLocalStorage[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const updateCart = (newCart: ProductPageLocalStorage[]) => {
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.dispatchEvent(new Event('storage'));
    };

    const increment = (id: number) => {
        const newCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(newCart);
    };

    const decrement = (id: number) => {
        const newCart = cart
            .map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0);
        updateCart(newCart);
    };

    const removeItem = (id: number) => {
        const newCart = cart.filter(item => item.id !== id);
        updateCart(newCart);
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = totalAmount > 0 ? 49 : 0;
    const grandTotal = totalAmount + shipping;

    if (cart.length === 0) {
        return (
            <div className='text-center py-20'>
                <h2 className='text-xl font-semibold'>Your cart is empty! 🫨</h2>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title> Cart </title>
            </Head>
            <div className='max-w-7xl mx-auto p-6'>
                <h1 className='text-2xl font-bold mb-6'>Your Cart ({cart.length} items)</h1>

                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='md:col-span-2 space-y-6'>
                        {cart.map(item => (
                            <div
                                key={item.id}
                                className='flex items-center gap-4 border-b pb-4'
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-20 h-20 object-contain rounded'
                                />
                                <div className='flex-1'>
                                    <h2 className='font-semibold text-sm md:text-base'>{item.title}</h2>
                                    <p className='text-gray-600 mt-1'>${item.price.toFixed(2)}</p>
                                    <div className='flex items-center mt-2 space-x-2'>
                                        <button
                                            onClick={() => decrement(item.id)}
                                            className='cursor-pointer bg-gray-300 w-8 h-8 rounded'
                                        >
                                            −
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => increment(item.id)}
                                            className='cursor-pointer bg-gray-300 w-8 h-8 rounded'
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className='cursor-pointer text-red-500 text-sm ml-4'
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                                <div className='text-right font-semibold text-lg hidden md:block'>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='bg-gray-50 p-6 border rounded shadow-sm h-fit'>
                        <h2 className='text-xl font-semibold mb-4'>Summary</h2>
                        <div className='flex justify-between mb-2'>
                            <span>Subtotal:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <span>Shipping:</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between font-bold text-lg'>
                            <span>Grand Total:</span>
                            <span>${grandTotal.toFixed(2)}</span>
                        </div>
                        <button className='cursor-pointer w-full mt-6 bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 font-semibold'>
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Cart;
