import React from 'react';
import './ItemCart.css';
import { ItemCountCart } from '../itemCountCart/ItemCountCart';
import { ItemDelete } from '../itemDelete/ItemDelete';

export const ItemCart = ({data}) => {
    console.log(data.quantity)
    return (
        <div className="itemCartContainer">
            <img src={data.image} alt="" />
            <div className="detailProduct">
                <span>{data.name}</span>
                <p>{data.description}</p>
                
            </div>
            <p> ${data.price}</p>
            <ItemCountCart stock={data.stock} cantSelect={data.quantity} data={data} />
            <p>${data.quantity * data.price}</p>
            <ItemDelete item={data}/>

        </div>
    )
}
