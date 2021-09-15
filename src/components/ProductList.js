import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import { ProductItems } from "./ProductItems";
import { Grid } from "semantic-ui-react";
const url = "https://fakestoreapi.com/products";

export const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios(url);
      const productsData = await response.data;
      dispatch(setProducts(productsData));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid style={{ padding: "20px", backgroundColor: "#f1f2f6" }}>
      <ProductItems />
    </Grid>
  );
};
