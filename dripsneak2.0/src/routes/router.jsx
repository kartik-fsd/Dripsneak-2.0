import { Route, Routes } from "react-router-dom";
import Register from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { SellerRegister } from "../pages/sellerRegister";
import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import ProductOverview from "../pages/product/ProductOverview";
import ProductForm from "../pages/dashboard-Pages/add-products";
import SideCategory from "../Components/Sidebar";
import Profile from "../pages/profile/Profile.jsx";
import Setting from "../pages/settings/Setting.jsx";

export const Routers = () => {
  const authRole = localStorage.getItem("role");

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/sneakers" element={<SideCategory />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
        {authRole === "SELLER" ? (
          <Route path="/add-products" element={<ProductForm />} />
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
