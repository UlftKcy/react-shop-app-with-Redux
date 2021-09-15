import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import axios from "axios";
import { useParams } from "react-router";
import { Icon, Item, Label, Button, Segment, Grid } from "semantic-ui-react";

export const ProductDetail = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  console.log(product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const getProduct = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Grid stackable columns={2} style={{ padding: "20px" }}>
          <Grid.Column>
            <Segment>
              <Item.Image size="large" src={image} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Item.Content style={{ padding: "25px", fontSize: "19px" }}>
                <Item.Header className="ui header">{title}</Item.Header>
                <Item.Meta style={{ margin: "20px" }}>
                  <Label as="a" color="teal" tag>
                    <div className="price" style={{ margin: "10px" }}>
                      ${price}
                    </div>
                  </Label>
                  <div className="stay" style={{ margin: "20px" }}>
                    <Label as="a" basic color="green" pointing>
                      {category}
                    </Label>
                  </div>
                </Item.Meta>
                <Item.Description style={{ margin: "50px" }}>
                  <p>{description}</p>
                </Item.Description>
                <Button animated="vertical" color="red">
                  <Button.Content visible>Add to Cart</Button.Content>
                  <Button.Content hidden>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </Item.Content>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};
