import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.scss";
import "./responsive.scss";
import "react-toastify/dist/ReactToastify.css";

import HomeScreen from "./pages/HomeScreen";
import WebScreen from "./pages/WebScreen";
import LandingPage from "./pages/LandingPage";
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
import PrivateRouter from "./PrivateRouter";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/browse/mobile/apps" replace />} />
          <Route path="/browse/mobile/apps/*" element={<HomeScreen />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/browse/web/apps/*" element={<WebScreen />} />
          <Route path="/apps/:id" element={<SingleProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateRouter component={ProfileScreen} />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/privacy" element={<Privacy />} /> 
          <Route path="/terms" element={<Terms />} /> 
          <Route path="/faqs" element={<Faqs />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
