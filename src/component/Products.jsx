import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reciveProducts } from "../redux/ProductAction";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    reciveProducts(dispatch);
  }, []);

  if (data == undefined) {
    return <h1>loading......</h1>;
  } else {
    return (
      <div>
        {data.products.map((item) => {
          return <h3>{item.name}</h3>;
        })}
      </div>
    );
  }
};

export default Products;
