import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import "./responsive.scss";
import "react-toastify/dist/ReactToastify.css";

import HomeScreen from "./pages/HomeScreen";
import SingleProduct from "./pages/SingleProduct";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Login from "./pages/LoginScreen";
import Register from "./pages/RegisterScreen"; 
import ProfileScreen from "./pages/ProfileScreen";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";
import ConfirmMail from "./pages/ConfirmMail";
import VerifiedMail from "./pages/VerifiedMail";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/products/:id" exact element={<SingleProduct />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:id" exact element={<SingleBlog />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/confirm-mail" exact element={<ConfirmMail />} />
          <Route path="/verified-mail" exact element={<VerifiedMail />} />
          <Route path="/profile" exact element={<ProfileScreen />} /> 
          <Route path="/contact" exact element={<Contact />} /> 
          <Route path="/about" exact element={<About />} /> 
          <Route path="/privacy" exact element={<Privacy />} /> 
          <Route path="/terms" exact element={<Terms />} /> 
          <Route path="/faqs" exact element={<Faqs />} /> 
          <Route path="*" exact element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
