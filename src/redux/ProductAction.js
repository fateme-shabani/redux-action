import axios from "axios";

//zamani k request b server mifrestim
const sendRequestProduct = () => {
  return { type: "SEND-REQUEST" };
};
//zamani k etelat daryaft shod
const reciveProduct = (products) => {
  return {
    type: "PRODUCT-RECIVE",
    payload: products,
  };
};
const failedProduct = (error) => {
  return {
    type: "FAILED-DATA",
    payload: error,
  };
};
export const reciveProducts = (dispatch) => {
  dispatch(sendRequestProduct());
  axios
    .get("http://80.75.14.90:9090/products")
    .then((response) => {
      dispatch(reciveProduct(response.data));
    })
    .catch((error) => {
      dispatch(failedProduct(error));
    });
};
