import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";

import HomeScreen from "./pages/HomeScreen";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import ProfileScreen from "./pages/ProfileScreen";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/products/:id" exact element={<SingleProduct />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/profile" exact element={<ProfileScreen />} /> 
          <Route path="*" exact element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
