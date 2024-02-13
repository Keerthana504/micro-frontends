import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";
import PageNotFound from "./PageNotFound";

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route exact path="/" Component={HomeContent} />
            <Route path="/product/:id" Component={PDPContent} />
            <Route path="/cart" Component={CartContent} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
