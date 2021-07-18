import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    if (!cart.length)
        return (
            <div>
                <h1>No hay items seleccionados</h1>
                <Link to="/">
                    <button>Ir a comprar</button>
                </Link>
            </div>
        );
    else
        return (
            <div>
                {cart.map((item) => (
                    <h1 key={item.id}>
                        Libro: {item.name} - {item.quantity} - {item.price}
                    </h1>
                ))}
                <button onClick={clearCart}>Vaciar carrito</button>
            </div>
        );
};
