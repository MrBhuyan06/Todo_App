import React from "react";

const TodoHeader = () => {
  return (
    <div className="w-full p-2 mt-10">
      <div className="w-full md:w-2/3 flex gap-4 items-center mx-auto">
        <input
          type="text"
          placeholder="Enter your task"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary">Primary</button>
      </div>
    </div>
  );
};

export default TodoHeader;
