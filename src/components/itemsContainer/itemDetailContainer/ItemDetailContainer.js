import React from "react";
import { db } from "../../../firebase";
import { ItemDetail } from "./itemDetail/ItemDetail";
import { useState, useEffect } from "react";

export const ItemDetailContainer = ({ match }) => {
    const [detailMatch, setDetailMatch] = useState([]);
    useEffect(() => {
        const getItem = () => {
            db.collection("items")
                .doc(match.params.number)
                .get()
                .then((querySnapshot) => {
                    setDetailMatch(querySnapshot.data());
                });
        };
        getItem();
    }, [match]);

    return (
        <div className="containerItemDetail">
            <ItemDetail data={detailMatch} />
        </div>
    );
};
