import root from "./_";
import home from "./home";
import product from "./product";
import productList from "./product-list";
import shoppingCart from "./shopping-cart";
import signIn from "./sign-in";
import signUp from "./sign-up";

root.children = [home, product, productList, shoppingCart, signIn, signUp];

export const routes = [root];
