import React from "react";
import "./Item.css";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Item = ({ data }) => {
    const { addToCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);
    return (
        <>
            <div className="contentBook">
                <Link to={`/detail/${data.id}`}>
                    <img src={data.image} alt="" />
                    <p>{data.name}</p>
                </Link>
                {data.stock > 0 && (
                    <ItemCount stock={data.stock} clickAdd={clickAdd} />
                )}
            </div>
        </>
    );
};
