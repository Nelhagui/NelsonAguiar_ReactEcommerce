import React from "react";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { FormCheckout } from "../../components/checkout/FormCheckout";
import { CartContext } from "../../components/context/CartContext";
import { db } from "../../firebase";

export const Checkout = () => {
    const { cart, setStatePurchase, statePurchase } = useContext(CartContext);
    const [orderId, setOrderId] = useState(false);

    const createOrder = (data) => {
        const acumular = (acumulador, item) =>
            acumulador + item.price * item.quantity;
        const totalValor = cart.reduce(acumular, 0);
        const order = { buyer: data, items: cart, total: totalValor };
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
