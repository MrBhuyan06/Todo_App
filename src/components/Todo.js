import React from "react";
import { TiTickOutline, TiCancel, TiDelete, TiEdit } from "react-icons/ti";

const Todo = ({ info }) => {
  console.log(info);
  const { title, completed } = info;
  return (
    <div className="flex items-center gap-4 justify-center w-4/5   border-2  mx-auto mb-2 ">
      <TiTickOutline
        className={`text-2xl cursor-pointer ${
          completed ? "text-red-300" : "text-blue-400"
        }  `}
      />
      <input
        type="text"
        className="w-2/3 p-2 rounded-md outline-none bg-transparent"
        name=""
        value={title}
        id=""
      />
      <TiDelete className="text-2xl cursor-pointer" />
      <TiEdit className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Todo;
