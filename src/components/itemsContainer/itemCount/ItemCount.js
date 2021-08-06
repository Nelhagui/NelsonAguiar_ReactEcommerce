import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const ItemCount = ({ stock, clickAdd }) => {
    const [count, setCount] = useState(1);
    const countDown = () => {
        if (count > 0) setCount(count - 1);
    };
    const countUp = () => {
        if (count < stock) setCount(count + 1);
    };

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
            {stock > 0 && (
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => clickAdd(count)}
                >
                    Agregar al carrito
                </Button>
            )}
        </>
    );
};
