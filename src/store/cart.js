const intialState = {
  cart: [],
};

export default function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
}

export const add = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};
