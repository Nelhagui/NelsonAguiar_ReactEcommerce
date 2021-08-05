import React from "react";
import "./CheckoutResponse.css";

export const CheckoutResponse = ({ match }) => {
    return (
        <div className="containerCheckOutResponse">
            <h1>
                {match.params.orderNumber !== "fail"
                    ? "¡Compra exitosa!"
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
