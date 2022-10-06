import React from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";



function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/product/:id" element={<ProductPage />} />
        <Route  path="*" element={<h1> Path not found </h1>} />
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;









