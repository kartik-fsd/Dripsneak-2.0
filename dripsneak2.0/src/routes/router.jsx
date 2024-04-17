import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Register from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { SellerRegister } from "../pages/sellerRegister";
import Home from "../pages/Home";
import ProductOverview from "../pages/product/ProductOverview";
import ProductForm from "../pages/dashboard-Pages/add-products";

import Profile from "../pages/profile/Profile.jsx";
import Setting from "../pages/settings/Setting.jsx";
import ProductListingCard from "../Components/Search/SearchProductDetailCard.jsx";
import ProductListPages from "../pages/ProductListing/ProductListingPage.jsx";
import ReviewsPage from "../pages/Reviews/Review.jsx";

export const Routers = () => {
  const navigate = useNavigate();
  const authRole = localStorage.getItem("role");

  const handleUnauthorizedAccess = () => {
    navigate("/unauthorized"); // Redirect to unauthorized page
  };

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/sneakers" element={<ProductListPages />} />
        <Route path="/search-products" element={<ProductListingCard />} />
        <Route path="/sneakers/:productId" element={<ProductOverview />} />
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* Protected Routes - Redirect to unauthorized if not SELLER */}
        <Route
          path="/add-products"
          element={
            authRole === "SELLER" ? (
              <ProductForm />
            ) : (
              <Navigate to="/unauthorized" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={authRole ? <Profile /> : handleUnauthorizedAccess}
        />
        <Route
          path="/settings"
          element={authRole ? <Setting /> : handleUnauthorizedAccess}
        />

        {/* Unauthorized Access Route */}
        <Route
          path="/unauthorized"
          element={
            <p className="pt-16">You are not authorized to access this page.</p>
          }
        />
      </Routes>
    </>
  );
};
