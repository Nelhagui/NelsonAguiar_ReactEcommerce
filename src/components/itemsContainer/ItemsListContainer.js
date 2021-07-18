import React from "react";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { ItemList } from "./itemList/ItemList";
import "./ItemsListContainer.css";

export const ItemsListContainer = ({ titleSeccion }) => {
    const [data, setData] = useState([]);
    const getItems = () => {
        const docs = [];
        db.collection("items").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setData(docs);
        });
    };
    useEffect(() => {
        getItems();
    });

    return (
        <>
            <h1>{titleSeccion}</h1>
            <ItemList items={data} />
        </>
    );
};
