import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header></Header>
      <div className="my-10">
        <switch>
          <Routes>
            <Route path="/product/:id" Component={PDPContent}></Route>
          </Routes>
        </switch>
      </div>
      <Footer></Footer>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
