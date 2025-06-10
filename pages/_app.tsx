import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Footer from '@/sections/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/shopping-bag.png" />
      </Head>
      <Navbar />
      <main className=''>
        <Component {...pageProps} />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
