import React from "react";
import { db } from "../../../firebase";
import { ItemDetail } from "./itemDetail/ItemDetail";
import { useState, useEffect } from "react";

export const ItemDetailContainer = ({ match }) => {
    const [detailMatch, setDetailMatch] = useState([]);
    const getItem = () => {
        const findMatch = (res) => {
            const results = res.filter(function (detail) {
                return detail.id === match.params.id;
            });
            const firstObj = results.length > 0 ? results[0] : null;
            setDetailMatch(firstObj);
        };
        const docs = [];
        db.collection("items").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            findMatch(docs);
        });
    };
    useEffect(() => {
        getItem();
    }, [match]);

    return (
        <div className="containerItemDetail">
            <ItemDetail data={detailMatch} />
        </div>
    );
};
