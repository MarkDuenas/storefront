import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { initialize, changeCategory } from "../store/category";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Categories = () => {
  const dispatch = useDispatch();

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
