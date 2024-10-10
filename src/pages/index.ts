import root from "./_";
import home from "./Home";
import product from "./Product";
import productList from "./ProductList";
import shoppingCart from "./ShoppingCart";
import signIn from "./SignIn";
import signUp from "./SignUp";

root.children = [home, product, productList, shoppingCart, signIn, signUp];

export const routes = [root];
