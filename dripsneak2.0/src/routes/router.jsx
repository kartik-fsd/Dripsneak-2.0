import { Route, Routes } from "react-router-dom";
import Register from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { SellerRegister } from "../pages/sellerRegister";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductOverview from "../pages/ProductOverview";
import AddProduct from "../pages/dashboard-Pages/AddProduct";

export const Routers = () => {
  const authRole = localStorage.getItem("role");

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/sneakers" element={<Dashboard />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        {authRole === "SELLER" ? (
          <Route path="/add-products" element={<AddProduct />} />
        ) : (
          <Route
            path="/unauthorized"
            element={<p>You are not authorized to access this page.</p>}
          />
        )}
      </Routes>
    </>
  );
};
