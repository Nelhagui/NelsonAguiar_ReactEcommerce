import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemCountCart.css";

export const ItemCountCart = ({ stock, cantSelect, data }) => {
    const {addToCart} = useContext(CartContext)
    const [count, setCount] = useState(cantSelect);
    const countDown = () => {
        if (count > 0) setCount(count - 1);
    };
    const countUp = () => {
        if (count < stock) setCount(count + 1);
    };
    
    useEffect(() => {
        addToCart(data, count)
    }, [count])


    return (
        <>
            <div className="containerBotonCount">
                <button className="btnCount" onClick={() => countDown()}>
                    {" "}
                    -{" "}
                </button>
                <p>{count}</p>
                <button className="btnCount" onClick={() => countUp()}>
                    {" "}
                    +{" "}
                </button>
            </div>
        </>
    );
};