import { createContext, useState } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [statePurchase, setStatePurchase] = useState(false);
    const clearCart = () => {
        setCart([]);
    };
    const clearItemFromCart = (item) => {
        const result = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(result);
    };
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
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const acumular = (acumulador, item) =>
        acumulador + item.price * item.quantity;
    const totalValor = cart.reduce(acumular, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                clearCart,
                addToCart,
                inCart,
                totalValor,
                clearItemFromCart,
                statePurchase,
                setStatePurchase,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
