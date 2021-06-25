import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { initialize, changeCategory } from "../store/category";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SimpleCart from "./SimpleCart";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "15px",
  },
  cart: {
    padding: "10px",
  },
});

const Categories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const change = (value) => {
    dispatch(changeCategory(value));
  };

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h2'>Browse our categories</Typography>
        <Button color='primary' onClick={() => change("electronics")}>
          {" "}
          Electronics{" "}
        </Button>{" "}
        |
        <Button color='primary' onClick={() => change("food")}>
          {" "}
          Food{" "}
        </Button>
      </div>
      <SimpleCart />
    </div>
  );
};

export default Categories;
