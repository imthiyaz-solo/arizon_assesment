import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
    return (
        <>
            <Head>
                <title> 404 </title>
            </Head>
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6'>
                <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
                <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
                <p className='text-gray-600 mb-6'>
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link href='/'>
                    <button className='cursor-pointer bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </>

    );
}
