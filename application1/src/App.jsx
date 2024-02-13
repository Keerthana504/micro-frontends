import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import MainLayout from "./MainLayout";

const App = () => (
  <div>
    <MainLayout />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
