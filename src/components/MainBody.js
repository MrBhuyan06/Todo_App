import React from "react";
import TodoHeader from "./TodoHeader.js";
import TodoBody from "./TodoBody.js";

const MainBody = () => {
  return (
    <div className="bg-slate-200 w-full mx-auto md:w-3/5  mt-2 rounded-md">
      <h1 className="text-center underline text-blue-600 font-semibold text-3xl cursor-pointer">
        Create Your Todo
      </h1>
      <div>
        <TodoHeader />
        <TodoBody />
      </div>
    </div>
  );
};

export default MainBody;
