import React from "react";
import { useSelector } from "react-redux";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const ProductItems = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <Grid.Row>
      {products.map((product) => {
        const { id, title, price, category, image } = product;
        return (
          <Grid.Column key={id} mobile={16} tablet={8} computer={4}>
            <Link to={`/product/${id}`}>
              <Card
                fluid
                style={{
                  width: "300px",
                  height: "400px",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  size="small"
                  centered
                  style={{ height: "50%", objectFit: "cover" }}
                />
                <Card.Content>
                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>
                    <span>{category}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>${price}</a>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        );
      })}
    </Grid.Row>
  );
};
