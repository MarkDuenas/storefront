import React from "react";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const currentCart = useSelector((state) => state.cart.cart);

  return (
    <div className={classes.root}>
      <AppBar color='inherit' position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            STOREFRONT
          </Typography>
          <Button>
            <Badge badgeContent={currentCart.length} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
