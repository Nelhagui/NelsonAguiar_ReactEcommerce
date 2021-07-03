import React from 'react'
import { ItemCount } from '../itemCount/ItemCount';
import './Item.css'

export const Item = ({data}) => {
    return (
        <>
            <div className="contentBook">
                <img src={data.image} alt="" />
                <p>{data.name}</p>
                <ItemCount stock={data.stock}/>
            </div>
        </>
    )
}
