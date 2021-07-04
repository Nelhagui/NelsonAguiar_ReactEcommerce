import React from 'react';
import './ViewItemDetail.css';
import { ItemDetailContainer } from '../../components/itemsContainer/itemDetailContainer/ItemDetailContainer';
export const ViewItemDetail = ({ match }) => {
    return (
        <div>
            <ItemDetailContainer match={match}/>
        </div>
    )
}
