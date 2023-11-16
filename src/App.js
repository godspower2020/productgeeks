import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";

import HomeScreen from "./pages/HomeScreen";
import SingleProduct from "./pages/SingleProduct";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Login from "./pages/LoginScreen";
import Register from "./pages/RegisterScreen"; 
import ProfileScreen from "./pages/ProfileScreen";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
          <Route path="/profile" exact element={<ProfileScreen />} /> 
          <Route path="/contact" exact element={<Contact />} /> 
          <Route path="*" exact element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
