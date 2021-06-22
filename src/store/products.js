const listOfProducts = [
  {
    name: "TV",
    description: "Large Flat Screen LED",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1611484550037-d5a0da2b1446?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "PS5",
    description: "Elusive Gaming console",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2082&q=80",
  },
  {
    name: "Drone",
    description: "Annoying flying cameras",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Hamburger",
    description: "Deliciously unhealthy",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80",
  },
  {
    name: "Oysters",
    description: "Fresh and amazing",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1582263953546-5a1348a24312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Sushi",
    description: "Raw and unapologetic",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
];

const initialState = {
  products: listOfProducts,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "START":
      const newList = listOfProducts.filter(
        (product) => product.category === payload
      );
      return { products: newList };
    case "CHANGE":
      const list = listOfProducts.filter(
        (product) => product.category === payload
      );
      return { products: list };
    default:
      return state;
  }
}

export const start = () => {
  return {
    type: "START",
    payload: "electronics",
  };
};

export const changeCategory = (category) => {
  return {
    type: "CHANGE",
    payload: category,
  };
};
