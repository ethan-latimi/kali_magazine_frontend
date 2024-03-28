import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HeroBlogSingle from '../HeroBlogSingle/HeroBlogSingle';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import LifeStylePage from '../LifeStylePage/LifeStylePage'
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';
import BreakingSingle from '../BreakingSingle/BreakingSingle';
import HighlightSingle from '../HighlightSingle/HighlightSingle';
import SponsoredSingle from '../SponsoredSingle/SponsoredSingle';
import FeaturesSingle from '../FeaturesSingle/FeaturesSingle';
import VideoNewsSingle from '../VideoNewsSingle/VideoNewsSingle';
import FoodBlogPage from '../FoodBlogPage/FoodBlogPage';
import BusinessBlogPage from '../BusinessBlogPage/BusinessBlogPage';
import TravelBlogPage from '../TravelBlogPage/TravelBlogPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="hero-blog-single/:slug" element={<HeroBlogSingle />} />
          <Route path="breaking-single/:slug" element={<BreakingSingle />} />
          <Route path="highlight-single/:slug" element={<HighlightSingle />} />
          <Route path="sponsor-single/:slug" element={<SponsoredSingle />} />
          <Route path="features-single/:slug" element={<FeaturesSingle />} />
          <Route path="video-single/:slug" element={<VideoNewsSingle />} />
          <Route path="home2" element={<HomePage2 />} />
          <Route path="home3" element={<HomePage3 />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='lifestyle' element={<LifeStylePage />} />
          <Route path='foods' element={<FoodBlogPage />} />
          <Route path='business' element={<BusinessBlogPage />} />
          <Route path='travels' element={<TravelBlogPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:id' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
