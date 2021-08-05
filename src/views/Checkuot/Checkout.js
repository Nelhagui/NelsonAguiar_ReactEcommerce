import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { FormCheckout } from "../../components/checkout/FormCheckout";
import { CartContext } from "../../components/context/CartContext";
import { db } from "../../firebase";

export const Checkout = () => {
    const { cart, totalValor } = useContext(CartContext);
    const [orderId, setOrderId] = useState(false);
    const [statePurchase, setStatePurchase] = useState(false);

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
                alert(err);
            });
    };

    return statePurchase === true ? (
        <Redirect to={`/checkout/result/${orderId}`} />
    ) : cart.length > 0 ? (
        <FormCheckout createOrder={createOrder} />
    ) : (
        <Redirect to={`/`} />
    );
};
