import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import iconClarCart from "../../../assets/icon-clear-cart.png";

import { ItemCart } from "../itemCart/ItemCart";

export const Cart = () => {
    const { cart, clearCart, totalValor } = useContext(CartContext);
    if (!cart.length)
        return (
            <div>
                <h1>No hay items seleccionados</h1>
                <Link to="/">
                    <Button variant="outlined" color="primary">
                        Ir a comprar
                    </Button>
                </Link>
            </div>
        );
    else
        return (
            <div className="cardContainerCart">
                <h1>Resumen:</h1>
                <div className="cardContainerItems">
                    {cart.map((item, index) => {
                        return <ItemCart key={index} data={item} />;
                    })}
                </div>
                <div className="containerSummaryCart">
                    <img
                        src={iconClarCart}
                        alt="clear-cart"
                        onClick={clearCart}
                    />
                    <div className="containerSubtotal">
                        <p>Subtotal: ${totalValor} </p>
                        <Link to="/checkout">
                            <Button variant="outlined" color="primary">
                                Siguiente
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
};
