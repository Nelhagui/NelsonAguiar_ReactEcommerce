import React from 'react'

export const ItemDetail = ({data}) => {
    return (
        <>
        {data ? 
            (
                <div>
                    <img src={data.image} alt="" />
                    <h1>{data.name}</h1>
                    <p>{data.price}</p>
                    <p>{data.name}</p>
                </div>
            ) : 
            (
                <h1>No hay coincidencias</h1>
            )
        }
        </>
    )
}
