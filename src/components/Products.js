import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { start } from "../store/products";
import { add } from "../store/cart";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100%",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 300,
  },
  grid: {
    flexGrow: 1,
    marginTop: "25px",
  },
});

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.products);
  const category = useSelector((state) => state.categories.category);

  useEffect(() => {
    dispatch(start());
  }, [dispatch]);

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const products =
    listOfProducts.products &&
    listOfProducts.products.map(
      (product, idx) =>
        product.stock > 0 && (
          <Grid key={idx} item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' compoenent='h2'>
                    {product.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {product.description}
                  </Typography>
                  <Typography variant='body2' color='secondary' component='p'>
                    Stock: {product.stock}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => addToCart(product)}
                  size='small'
                  color='primary'
                >
                  Add to Cart
                </Button>
                <Button size='small' color='primary'>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
    );

  return (
    <>
      <div className={classes.root}>
        <Typography variant='h1'>{category.toUpperCase()}</Typography>
        <Typography variant='h6'>Category Description goes here</Typography>
      </div>
      <div className={classes.grid}>
        <Grid
          spacing={4}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {products}
        </Grid>
      </div>
    </>
  );
};

export default Products;
