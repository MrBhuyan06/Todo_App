import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import MainBody from "./components/MainBody.js";

const App = () => {
  return (
    <>
      <Header />
      <MainBody />
    </>
  );
};

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
