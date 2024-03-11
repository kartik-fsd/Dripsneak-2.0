import { Route, Routes } from "react-router-dom";
import Register from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { SellerRegister } from "../pages/sellerRegister";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductOverview from "../pages/ProductOverview";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/sneakers" element={<Dashboard />} />
        <Route path="/product-overview" element={<ProductOverview />} />
      </Routes>
    </>
  );
};
