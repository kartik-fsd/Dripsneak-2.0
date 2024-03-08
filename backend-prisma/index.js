const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Register } = require("./apis/userRegister");
const { Login } = require("./apis/login");
const { router } = require("./apis/logout");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.post("/auth/register", Register);
app.post("/auth/login", Login);
app.use("/user", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
