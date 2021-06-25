import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: "20px",
    border: "2px dashed black",
    background: "#F4F0DB",
    position: "absolute",
    right: 20,
    width: "150px",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    verticalAlign: "middle",
  },
});

const SimpleCart = () => {
  const classes = useStyles();

  const currentCart = useSelector((state) => state.cart.cart);
  console.log(currentCart);

  const cartList = currentCart.map((item, idx) => (
    <li key={idx} className={classes.item}>
      <Button>{item.name}</Button>
      <DeleteIcon fontSize='small' />
    </li>
  ));

  return (
    <>
      {currentCart.length > 0 && (
        <div className={classes.root}>
          <ul className={classes.list}>{cartList}</ul>
        </div>
      )}
    </>
  );
};

export default SimpleCart;
