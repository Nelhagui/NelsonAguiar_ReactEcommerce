import React from "react";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { FormCheckout } from "../../components/checkout/FormCheckout";
import { CartContext } from "../../components/context/CartContext";
import { db } from "../../firebase";

export const Checkout = () => {
    const { cart, totalCart, setStatePurchase, statePurchase } =
        useContext(CartContext);
    const [orderId, setOrderId] = useState(false);
    const createOrder = (data) => {
        const order = { buyer: data, items: cart, total: totalCart };
        const orders = db.collection("orders");
        orders
            .add(order)
            .then(({ id }) => {
                setOrderId(id); // success
                setStatePurchase(true);
            })
            .catch((err) => {
                alert(err);
            });
    };

    return cart.length > 0 ? (
        statePurchase ? (
            <Redirect to={`/checkout/result/${orderId}`} />
        ) : (
            <FormCheckout createOrder={createOrder} />
        )
    ) : (
        <Redirect to="/" />
    );
};
