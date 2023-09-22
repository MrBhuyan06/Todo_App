import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import MainBody from "./components/MainBody.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainBody />
    </Provider>
  );
};

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
