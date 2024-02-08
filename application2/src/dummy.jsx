import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

import "./index.scss";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<div>Loading</div>}>
          <Header></Header>
        </Suspense>
      )}
      <button className="text-3xl p-5" onClick={() => setShowHeader(true)}>
        Show The Header
      </button>
      <div className="my-10"> Application2 Page Content</div>
      <Footer></Footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
