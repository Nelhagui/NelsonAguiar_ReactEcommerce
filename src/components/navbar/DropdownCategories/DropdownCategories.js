import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { Link } from "react-router-dom";
import "./DropdownCategories.css";

export default function DropdownCategories() {
    const { allCategories } = useContext(CategoriesContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button className="nav-item nav-link tfont3" onClick={handleClick}>
                Categorías
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {allCategories.map((category) => {
                    return (
                        <Link
                            to={`/categories/${category.id}`}
                            className="nav-item nav-link tfont3"
                            key={category.id}
                        >
                            <MenuItem onClick={handleClose}>
                                {category.name_category}
                            </MenuItem>
                        </Link>
                    );
                })}
            </Menu>
        </>
    );
}
