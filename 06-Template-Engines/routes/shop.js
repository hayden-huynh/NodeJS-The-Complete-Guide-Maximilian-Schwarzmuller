const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // Data like "products" below, although is shared across multiple views, is actually stored on the server, which means all different users of the app will have access to the same data
  // console.log("shop.js", adminData.products);

  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  const products = adminData.products;

  // By default, Handlebars will use the default layout if there is one already set. If we want to opt out from this, we can set the property "layout: false" in the object sent to the view from render
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
