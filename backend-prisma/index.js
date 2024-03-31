const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Register } = require("./apis/auth/userRegister");
const { Login } = require("./apis/auth/login");
const Logout = require("./apis/auth/logout");
const createProduct = require("./apis/product/createProduct.js");
const fetchAll = require("./apis/product/allProduct.js");
const createMultipleProduct = require("./apis/product/multipleProductCreation.js");
const fetchCategoryWise = require("./apis/product/category.js");
const editProductDetails = require("./apis/product/editProduct.js");
const deleteProduct = require("./apis/product/deleteProduct.js");
const bulkReviews = require("./apis/product/bulkReview.js");
const addReview = require("./apis/product/addReview.js");

const fetchReview = require("./apis/product/fetchProductReview.js");

const productIds = require("./apis/product/productIds.js");
const userIds = require("./apis/auth/userId.js");
const { searchProducts } = require("./apis/product/search.js");
const productOverview = require("./apis/product/productOverview.js");

const popularProduct = require("./apis/product/sort/mostPopular.js");
const bestRating = require("./apis/product/sort/bestRating.js");
const lowPrices = require("./apis/product/sort/lowPrice.js");
const highPrices = require("./apis/product/sort/highPrice.js");

const profile = require("./apis/auth/profile.js");
const wishList = require("./apis/product/wishList.js");
const wishListRemove = require("./apis/product/whishListRemove.js");
const fetchWishList = require("./apis/product/fetchWhishList.js");
const addProfile = require("./apis/auth/profile.js");
const getProfile = require("./apis/auth/getProfile.js");
const editProfile = require("./apis/auth/EditProfile.js");

const mockUp = require("./Generator/ProductGenerator.js");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Specify the allowed origin
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.post("/auth/register", Register);
app.post("/auth/login", Login);
app.use("/user", Logout);

// Cretea product api
app.use("/product", createProduct);
// Cretea multiple-product api
app.use("/product", createMultipleProduct);

//fetch all product api
app.use("/product", fetchAll);

//fetch speicfied category product api
app.use("/product", fetchCategoryWise);

//edit the speicfied product api
app.use("/product", editProductDetails);

//delete the speicfied product api
app.use("/product", deleteProduct);

//create a new review for the specified product
app.use("/product", addReview);

//fetch all product review of specified product
app.use("/product", fetchReview);

//fetch all product Id's
app.use("/product", productIds);

//fetch all user Id'specified role
app.use("/user", userIds);

//create bulk review
app.use("/product", bulkReviews);

//create search api
app.get("/product/search", searchProducts);

//fetch the required product detail
app.use("/product", productOverview);

//fetch the popular sneaker
app.use("/product", popularProduct);

//fetch the popular sneaker
app.use("/product", bestRating);

//fecth the low to high priced product
app.use("/product", lowPrices);

//fecth the high to low priced product
app.use("/product", highPrices);

//create a profile of the user
app.use("/user", profile);

//add item to wish list product
app.use("/sneaker", wishList);

//remove item from wish list product
app.use("/sneaker", wishListRemove);

//fetch items form the wishlist
app.use("/sneaker", fetchWishList);

//fetch mockup data
//app.use("/sneaker", mockUp);

//add profile detail of user
app.use("/user", addProfile);

//get profile details of user
app.use("/user", getProfile);

//edit the profile details of user
app.use("/user", editProfile);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
