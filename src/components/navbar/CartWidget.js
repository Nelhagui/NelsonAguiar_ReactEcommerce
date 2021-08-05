import React from "react";
import "./CartWidget.css";
import { useContext } from "react";
import icon from "../../assets/icon-cart.svg";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const { cart } = useContext(CartContext);

    function calcTotal() {
        let totalItems = 0;
        for (const item of cart) {
            totalItems = totalItems + item.quantity;
        }
        return totalItems;
    }

    return (
            <div className="contentCartWidget">
                <img src={icon} className="icon-cart" alt="icono-carrito" />
                <p>({calcTotal()})</p>
            </div>
    );
};

export default CartWidget;
