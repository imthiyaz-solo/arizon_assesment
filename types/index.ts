export interface ProductPageProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export interface ProductPageLocalStorage {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}
