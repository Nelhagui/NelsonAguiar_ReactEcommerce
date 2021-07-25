import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart, statePurchase } = useContext(CartContext);
    if (statePurchase) clearCart();
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
                <h1>Resumen:</h1>
                {cart.map((item) => (
                    <h1 key={item.id}>
                        Libro: {item.name} - {item.quantity} - {item.price}
                    </h1>
                ))}
                <button onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button>Siguiente</button>
                </Link>
            </div>
        );
};
