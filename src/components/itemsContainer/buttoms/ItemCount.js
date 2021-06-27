import React, {useState} from 'react'
import './ItemCount.css';

export const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);
    const countDown = ()=>{
        if(count > 0)
            setCount(count-1);
    }
    const countUp = () =>{
        if(count < stock)
            setCount(count+1);
    }
    return (
        <>
            <div className="containerBotonCount">
                <button className="btnCount" onClick={() => countDown()}> - </button>
                    <p>{count}</p>
                <button className="btnCount" onClick={() => countUp()}> + </button>
            </div> 
        </>
    )
}
