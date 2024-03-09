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

const app = express();

// Middleware
app.use(cors());
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
