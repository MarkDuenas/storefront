import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { initialize, changeCategory } from "../store/category";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

const Categories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.category);

  const change = (value) => {
    dispatch(changeCategory(value));
  };
  useEffect(() => {
    dispatch(initialize());
  }, []);

  return (
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
  );
};

export default Categories;
