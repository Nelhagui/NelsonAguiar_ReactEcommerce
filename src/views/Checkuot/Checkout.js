import { useEffect } from "react";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { FormCheckout } from "../../components/checkout/FormCheckout";
import { CartContext } from "../../components/context/CartContext";
import { db } from "../../firebase";

export const Checkout = () => {
    const { cart, totalValor, setStatePurchase, statePurchase } =
        useContext(CartContext);
    const [orderId, setOrderId] = useState(false);
    const [error, setError] = useState(false);

    const createOrder = (data) => {
        const order = { buyer: data, items: cart, total: totalValor };
        const orders = db.collection("orders");
        orders
            .add(order)
            .then(({ id }) => {
                setOrderId(id); // success
                setStatePurchase(true);
            })
            .catch((err) => {
                setError(err);
            });
    };

    useEffect(() => {
        if (error !== false) <Redirect to={`/checkout/result/${error}`} />;
    }, [error]);

    return cart.length > 0 ? (
        statePurchase === false ? (
            <FormCheckout createOrder={createOrder} />
        ) : (
            <Redirect to={`/checkout/result/${orderId}`} />
        )
    ) : (
        <Redirect to={`/`} />
    );
};
