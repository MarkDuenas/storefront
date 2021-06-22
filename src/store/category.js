const categories = ["electronics", "food"];

const intialState = {
  category: categories[0],
};

export default function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "INITIALIZE":
      return state;
    case "CHANGE":
      return { ...state, category: payload };
    default:
      return state;
  }
}

export const initialize = () => {
  return {
    type: "INITIALIZE",
    payload: "",
  };
};

export const changeCategory = (category) => {
  return {
    type: "CHANGE",
    payload: category,
  };
};
