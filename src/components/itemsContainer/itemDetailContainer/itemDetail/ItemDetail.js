import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemCount } from "../../itemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
export const ItemDetail = ({ data }) => {
    const { cart, addToCart, inCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);
    console.log(data.id);
    console.log(inCart(data.id));

    return (
        <>
            {data ? (
                <div className="ItemDetail">
                    <img src={data.image} alt="" />
                    <h1>{data.name}</h1>
                    <p>{data.price}</p>
                    <p>{data.description}</p>
                    {data.stock > 0 && !inCart(data.id) ? (
                        <ItemCount
                            stock={data.stock}
                            clickAdd={clickAdd}
                        ></ItemCount>
                    ) : (
                        <Link to={"/cart"}>
                            <button>Finalizar Compra</button>
                        </Link>
                    )}
                </div>
            ) : (
                <h1>No hay coincidencias</h1>
            )}
        </>
    );
};
