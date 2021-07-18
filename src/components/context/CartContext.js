import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const inCart = (id) => cart.some((item) => item.id === id);

    const addToCart = (item, quantity) => {
        if (inCart(item.id)) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: quantity,
                    };
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, setCart, clearCart, addToCart, inCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
