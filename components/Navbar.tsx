'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import useCartCount from '@/hooks/useCartcount';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // optional: use heroicons or svg
import Link from 'next/link';
import menuData from '@/data/menuData.json';

export default function Navbar() {

    const cartCount = useCartCount();
    const router = useRouter();
    const categories = menuData.map((cat) => cat.category);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileOpenCategory, setMobileOpenCategory] = useState<string | null>(null);

    function toggleMobileCategory(cat: string) {
        setMobileOpenCategory((prev) => (prev === cat ? null : cat));
    }

    return (
        <nav className='text-white relative'>
            <div className='z-50 fixed top-0 bg-gray-800 flex md:flex-col justify-between md:relative w-full'>

                <div className='md:hidden flex justify-center m-auto'>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className='p-2 rounded-md hover:bg-gray-700 focus:outline-none'
                        aria-label='Toggle menu'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>
                </div>

                <div className='bg-gray-800 md:z-50 flex justify-between p-4 md:fixed md:top-0 w-full'>
                    <Link href='/' className='font-bold text-2xl text-white'>
                        ShopNex
                    </Link>

                    <div className='relative flex items-center ml-4 cursor-pointer' onClick={() => router.push('/cart')}>
                        <ShoppingCartIcon className='w-6 h-6 text-white' />
                        {cartCount > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                                {cartCount}
                            </span>
                        )}
                    </div>

                </div>

                <div className='hidden w-full md:flex md:flex-col space-x-8 bg-gray-400 justify-center mt-15 relative'>
                    <div className='flex !bg-violet-600 space-x-14 w-full justify-center'>
                        {categories.map((category) => (
                            <div
                                key={category}
                                className='relative p-2'
                                onMouseEnter={() => setHoveredCategory(category)}
                                onMouseLeave={() => setHoveredCategory(null)}
                            >
                                <Link
                                    href={`/products/${category}`}
                                    className=''
                                >

                                    <button className='cursor-pointer capitalize px-3 py-2 hover:bg-gray-700'>
                                        {category}
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {hoveredCategory && (
                        <div
                            className='hidden absolute top-14 md:block w-full h-fit bg-white text-black z-20'
                            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <div className='px-6 py-4 overflow-x-auto'>
                                <div className='flex space-x-12'>
                                    {menuData
                                        .find((cat) => cat.category === hoveredCategory)
                                        ?.subCategories.map((sub) => (
                                            <div key={sub.name} className=''>
                                                <h3 className='font-semibold mb-2'>{sub.name}</h3>
                                                <ul className='space-y-1'>
                                                    {sub.items.map((item) => (
                                                        <li key={item.id}>
                                                            <Link
                                                                href={`/product/${item.id}`}
                                                                className='hover:text-blue-600'
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {mobileMenuOpen && (
                <div className='md:hidden bg-gray-700 text-white p-4 space-y-2 mt-[60px] fixed w-full h-[70vh] overflow-y-auto transition duration-500'>
                    {categories.map((category) => (
                        <div key={category}>
                            <Link
                                href={`/products/${category}`}
                                className=''
                            >
                                <button
                                    className='w-full text-left flex justify-between items-center px-3 py-2 hover:bg-gray-600 rounded'
                                    onClick={() => toggleMobileCategory(category)}
                                >
                                    <span className='capitalize'>{category}</span>
                                    <svg
                                        className={`w-4 h-4 transform transition-transform ${mobileOpenCategory === category ? 'rotate-180' : ''
                                            }`}
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                                    </svg>
                                </button>
                            </Link>

                            {/* Submenu */}
                            {mobileOpenCategory === category && (
                                <div className='pl-6 mt-2 space-y-4'>
                                    {menuData
                                        .find((cat) => cat.category === category)
                                        ?.subCategories.map((sub) => (
                                            <div key={sub.name}>
                                                <h4 className='font-semibold'>{sub.name}</h4>
                                                <ul className='mt-1 space-y-1'>
                                                    {sub.items.map((item) => (
                                                        <li key={item.id}>
                                                            <Link
                                                                href={`/product/${item.id}`}
                                                                className='hover:text-blue-400'
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                </div>

                            )}
                        </div>
                    ))}
                </div>
            )}

        </nav>
    );
}
