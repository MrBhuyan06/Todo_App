import React from "react";
import { TiTickOutline, TiCancel, TiDelete, TiEdit } from "react-icons/ti";

const Todo = () => {
  return (
    <div className="flex items-center gap-4 justify-center w-4/5   border-2  mx-auto ">
      <TiTickOutline className="text-2xl" />
      <input
        type="text"
        className="w-2/3 p-2 rounded-md outline-none bg-transparent"
        name=""
        id=""
      />
      <TiDelete className="text-2xl" />
      <TiEdit className="text-2xl" />
    </div>
  );
};

export default Todo;
