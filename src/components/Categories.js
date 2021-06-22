import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { initialize, changeCategory } from "../store/category";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.category);
  console.log(category);

  const change = (value) => {
    dispatch(changeCategory(value));
  };
  useEffect(() => {
    dispatch(initialize());
  }, []);

  return (
    <div>
      <button onClick={() => change("electronics")}> Electronics </button>
      <button onClick={() => change("food")}> Food </button>
    </div>
  );
};

export default Categories;
