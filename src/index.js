import React from "react";
import ReactDOM from "react-dom";
import Advice from "./Components/Advice";
import Footer from "./Components/Footer";

// import "bootstrap";
// import App from "./App";

const App = () => {
  return (
    <>
      <Advice />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
