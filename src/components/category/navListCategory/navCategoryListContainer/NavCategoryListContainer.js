import React from "react";
import { NavListCategory } from "../navCategoryList/NavListCategory";

export const NavCategoryListContainer = ({ allCategories }) => {
    return (
        <div className="containerNavListCategory">
            <NavListCategory data={allCategories} />
        </div>
    );
};
