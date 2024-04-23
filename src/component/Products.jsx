import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reciveProducts } from "../redux/ProductAction";
import { BeatLoader } from "react-spinners";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    reciveProducts(dispatch);
  }, []);

  if (data.isLoading == true) {
    return <BeatLoader color="#36d7b7" />;
  } else {
    return (
      <div>
        {data.products.map((item) => {
          return <h4>{item.name}</h4>;
        })}
      </div>
    );
  }
};

export default Products;
