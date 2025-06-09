import { ProductPageProps } from '@/types';

export const getCartItemCount = (): number => {
    if (typeof window === 'undefined') return 0;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total: number, item: any) => total + item.quantity, 0);
};

export const addToCart = (product: ProductPageProps) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const index = cart.findIndex((item: any) => item.id === product.id);
    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
};

