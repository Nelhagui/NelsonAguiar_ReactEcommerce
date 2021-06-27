import React, { useEffect, useState } from 'react'
import { listData } from '../itemList/ItemListComponent';
import { ItemCount } from '../buttoms/ItemCount';
import './Item.css';

export const Item = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setList(listData);
        }, 2000);
    }, [])

    return (
        <>
            {list.map((item)=>{
                return (
                    <div key={item.id} className="contentBook">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <ItemCount stock={item.stock}/>
                    </div>
                )
            })}
        </>
    )
}

