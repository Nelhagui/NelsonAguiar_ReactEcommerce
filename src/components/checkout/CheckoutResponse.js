import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CheckoutResponse = ({ match }) => {
    const { statePurchase } = useContext(CartContext);

    return (
        <div>
            <h1>
                {statePurchase
                    ? "Compra exitosa"
                    : "Error al procesar la compra"}
            </h1>
            <p>
                {statePurchase
                    ? `Su número de orden es la siguiente "${match.params.orderNumber}"`
                    : "Por favor vuelva a intentarlo"}
            </p>
        </div>
    );
};
