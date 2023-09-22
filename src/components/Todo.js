import React, { useState } from "react";
import { TiTickOutline, TiCancel, TiDelete, TiEdit } from "react-icons/ti";
import { removeTodo } from "../redux/taskSlice.js";
import { useDispatch } from "react-redux";
import { addToHead } from "../redux/taskSlice.js";

const Todo = ({ info }) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeTodo(info));
  }
  function handleEdit() {
    // console.log(info);
    dispatch(addToHead(info));
  }

  return (
    <div className="flex items-center gap-4 justify-center w-4/5   border-2  mx-auto mb-2 ">
      <TiTickOutline
        className={`text-2xl cursor-pointer ${
          info.completed ? "text-red-300" : "text-blue-400"
        }  `}
      />
      <input
        type="text"
        className="w-2/3 p-2 rounded-md outline-none bg-transparent"
        name=""
        value={info.title}
        id=""
        readOnly
      />
      <TiDelete className="text-2xl cursor-pointer" onClick={handleDelete} />
      <TiEdit className="text-2xl cursor-pointer" onClick={handleEdit} />
    </div>
  );
};

export default Todo;
