import React from 'react';
import "./CartWidget.css";
import { useContext } from "react";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from "../context/CartContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    function calcTotal() {
        let totalItems = 0;
        for (const item of cart) {
            totalItems = totalItems + item.quantity;
        }
        return totalItems;
    }
  return (
    <IconButton aria-label="cart" className="contentCartWidget">
      <StyledBadge badgeContent={calcTotal()} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

export default CartWidget;

