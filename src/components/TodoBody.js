import React from "react";
import Filter from "./Filter.js";
import Todo from "./Todo.js";

const TodoBody = () => {
  return (
    <div className="bg-gray-100 rounded-md mt-10 w-2/3 mx-auto">
      <p className="text-center text-3xl underline text-blue-600 font-semibold">
        List Of Task
      </p>
      <Filter />
      <Todo />
    </div>
  );
};

export default TodoBody;
