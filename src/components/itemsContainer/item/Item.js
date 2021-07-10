import React from "react";
import "./Item.css";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Item = ({ data }) => {
    const { cart, addToCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);
    console.log(cart);
    return (
        <>
            <div className="contentBook">
                <Link to={`/detail/${data.id}`}>
                    <img src={data.image} alt="" />
                    <p>{data.name}</p>
                </Link>
                <ItemCount stock={data.stock} clickAdd={clickAdd} />
            </div>
        </>
    );
};
