import React, { useState } from "react";
import { initialTask, addTask } from "../redux/taskSlice.js";
import { useDispatch } from "react-redux";

const TodoHeader = () => {
  const [taskDes, setTaskDes] = useState("");
  const dispatch = useDispatch();
  let uuId = 20;

  function handleAddTask() {
    dispatch(
      addTask({
        userId: 1,
        id: ++uuId,
        title: taskDes,
        completed: false,
      })
    );
  }

  return (
    <div className="w-full p-2 mt-10">
      <div className="w-full md:w-2/3 flex gap-4 items-center mx-auto">
        <input
          type="text"
          onChange={(e) => {
            setTaskDes(e.target.value);
          }}
          placeholder="Enter your task"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary " onClick={handleAddTask}>
          Primary
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
