import React from "react";
import ReactDOM from "react-dom/client.js";

const App = () => {
  return (
    <>
      <div className=" 0 navbar  bg-gray-100">
        <div className=" mx-auto">
          <a className="btn btn-ghost normal-case text-xl">
            Todo_App_Assigment_By_CORESONANT
          </a>
        </div>
      </div>
    </>
  );
};

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
