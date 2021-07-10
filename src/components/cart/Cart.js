import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Redirect } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    if (!cart.length) return <Redirect to="/" />;
    return (
        <div>
            {cart.map((item) => (
                <h1 key={item.id}>
                    Libro: {item.name} - {item.quantity}
                </h1>
            ))}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
};
