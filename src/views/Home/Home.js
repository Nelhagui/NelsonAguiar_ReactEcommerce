import React from 'react'
import { ItemsListContainer } from '../../components/itemsContainer/ItemsListContainer'

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ItemsListContainer titleSeccion="Novedades del mes" />
        </div>
    )
}
