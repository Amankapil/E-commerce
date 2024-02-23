import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import Home from "./Components/homepage/Home";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/navbar/Navbar";
import Useraccount from "./Components/useraccount/Useraccount";
// import Dummy from "./Components/ProductList/Dummy";

const Dummy = React.lazy(() => import("./Components/ProductList/Dummy"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<ProductList />} /> */}
          <Route exact path="/" element={<Dummy />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/user" element={<Useraccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
