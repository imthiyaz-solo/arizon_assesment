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

export interface InfoCardProps {
    data: {
        src: React.ReactNode;
        title: string;
    }[];
}

interface InfoItem {
    src: React.ReactNode;
    title: string;
    desc?: string;
}

export interface InfoSectionProps {
    heading: string;
    subHeading?: string;
    items: InfoItem[];
    type: string;
    total?: number;
    width?: string;
    textWidth?: string
}