import React from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export const CheckoutResponse = ({ match}) => {
    const {clearCart} = useContext(CartContext)
    useEffect(() => {
        clearCart();
    }, [match])
    
    return (
        <div>
            <h1>
                {match.params.orderNumber !== "fail"
                    ? "Compra exitosa"
                    : "Error al procesar la compra"}
            </h1>
            <p>
                {match.params.orderNumber !== "fail"
                    ? `Su número de orden es la siguiente "${match.params.orderNumber}"`
                    : "Por favor vuelva a intentarlo"}
            </p>
        </div>
    );
};
