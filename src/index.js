import React from "react";
import ReactDOM from "react-dom";
import Advice from "./Components/Advice";
import Footer from "./Components/Footer";

// import "bootstrap";
// import App from "./App";

const App = () => {
  return (
    <>
      <main
        className="bg-darkgrayishblue mx-auto p-5 rounded-3 shadow d-flex flex-column align-items-center"
        style={{
          width: "min(90%, 35rem",
          marginTop: "15rem",
        }}
      >
        <Advice />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
