import React from "react";
import "./CheckoutResponse.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Redirect } from "react-router-dom";
export const CheckoutResponse = ({ match }) => {
    const { statePurchase, clearCart } = useContext(CartContext);
    useEffect(() => {
        clearCart();
    }, [match]);

    return statePurchase === true ? (
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
    ) : (
        <Redirect to={`/`} />
    );

    // return (
    //     <div className="containerCheckOutResponse">
    //         <h1>
    //             {match.params.orderNumber !== "fail"
    //                 ? "¡Compra exitosa!"
    //                 : "Error al procesar la compra"}
    //         </h1>
    //         <p>
    //             {match.params.orderNumber !== "fail"
    //                 ? `Su número de orden es la siguiente "${match.params.orderNumber}"`
    //                 : "Por favor vuelva a intentarlo"}
    //         </p>
    //     </div>
    // );
};
