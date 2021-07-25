import React from "react";
import { NavCategory } from "../navCategory/NavCategory";
import "./NavListCategory.css";

export const NavListCategory = ({ data }) => {
    return (
        <>
            <div className="navListCategory">
                <h5>Categories</h5>
                {data.map((category) => {
                    return (
                        <NavCategory category={category} key={category.id} />
                    );
                })}
            </div>
        </>
    );
};
