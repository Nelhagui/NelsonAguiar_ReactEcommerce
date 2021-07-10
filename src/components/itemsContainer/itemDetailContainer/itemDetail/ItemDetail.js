import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemCount } from "../../itemCount/ItemCount";
import "./ItemDetail.css";
export const ItemDetail = ({ data }) => {
    const { addToCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);
    return (
        <>
            {data ? (
                <div className="ItemDetail">
                    <img src={data.image} alt="" />
                    <h1>{data.name}</h1>
                    <p>{data.price}</p>
                    {data.stock > 0 && (
                        <ItemCount
                            stock={data.stock}
                            clickAdd={clickAdd}
                        ></ItemCount>
                    )}
                    <p>{data.name}</p>
                </div>
            ) : (
                <h1>No hay coincidencias</h1>
            )}
        </>
    );
};
