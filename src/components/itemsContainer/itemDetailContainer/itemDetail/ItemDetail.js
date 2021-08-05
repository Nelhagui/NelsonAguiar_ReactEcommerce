import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemCount } from "../../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./ItemDetail.css";
export const ItemDetail = ({ data }) => {
    const { addToCart, inCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);

    return (
        <>
            {data ? (
                <div className="ItemDetail">
                    <div>
                        <img src={data.image} alt="" />
                    </div>
                    <div className="ItemDetailContainerDetails">
                        <h1>{data.name}</h1>
                        <p>${data.price}</p>
                        <span>Stock: {data.stock}</span>
                        <div className="ItemDetailDescription">
                            <p>{data.description}</p>
                        </div>
                        <div className="ItemDetailOptions">
                            {data.stock > 0 && !inCart(data.id) ? (
                                <ItemCount
                                    stock={data.stock}
                                    clickAdd={clickAdd}
                                ></ItemCount>
                            ) : (
                                <Link to={"/cart"}>
                                    <Button variant="outlined" color="primary">
                                        Finalizar Compra
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <h1>El producto que está buscando no existe.</h1>
            )}
        </>
    );
};
