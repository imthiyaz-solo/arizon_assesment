"use client";

import { useEffect, useState } from "react";

export default function useCartCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
            try {
                const cart = JSON.parse(localStorage.getItem("cart") || "[]");
                const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
                setCount(total);
            } catch (e) {
                setCount(0);
            }
        };

        updateCartCount();

        window.addEventListener("storage", updateCartCount);

        return () => {
            window.removeEventListener("storage", updateCartCount);
        };
    }, []);

    return count;
}
