import React from "react";
import "./ViewItemDetail.css";
import { ItemDetailContainer } from "../../components/itemsContainer/itemDetailContainer/ItemDetailContainer";
export const ViewItemDetail = ({ match }) => {
    return (
        <div className="hola">
            <ItemDetailContainer match={match} />
        </div>
    );
};
