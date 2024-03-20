import { Route, Routes } from "react-router-dom";
import Register from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { SellerRegister } from "../pages/sellerRegister";
import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import ProductOverview from "../pages/product/ProductOverview";
import ProductForm from "../pages/dashboard-Pages/add-products";

import Profile from "../pages/profile/Profile.jsx";
import Setting from "../pages/settings/Setting.jsx";
import ProductListingCard from "../Components/Search/SearchProductDetailCard.jsx";
import ProductListPages from "../pages/ProductListing/ProductListingPage.jsx";

export const Routers = () => {
  const authRole = localStorage.getItem("role");

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/sneakers" element={<ProductListPages />} />
        <Route path="/search-products" element={<ProductListingCard />} />
        <Route
          path="/product-overview/:productId"
          element={<ProductOverview />}
        />
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
