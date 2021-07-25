import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [statePurchase, setStatePurchase] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const clearCart = () => {
        setCart([]);
        setStatePurchase(false);
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
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
        getTotal(cart);
    };

    const getTotal = (dat) => {
        dat.map((item) => {
            setTotalCart((totalCart + +item.price) * +item.quantity);
        });
    };
    console.log(totalCart);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                clearCart,
                addToCart,
                inCart,
                totalCart,
                statePurchase,
                setStatePurchase,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
