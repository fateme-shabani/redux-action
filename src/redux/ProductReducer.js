const initial_state = {
  isLoading: false,
  products: [],
  error: "",
};

const ProductReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SEND-REQUEST": {
      return { ...state, isLoading: true };
    }
    case "PRODUCT-RECIVE": {
      return { isLoading: false, products: action.payload, error: "" };
    }
    case "FAILED-DATA": {
      return { isLoading: false, products: [], error: action.payload };
    }
  }
};
export default ProductReducer;
