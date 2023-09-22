import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store.js";
import { addTask } from "../redux/taskSlice.js";
import { editedTask } from "../redux/taskSlice.js";

const TodoHeader = () => {
  const [taskDes, setTaskDes] = useState("");
  const [editDes, setEditDes] = useState("");
  const initTaskList = useSelector((store) => store.task.listTask);
  let editHeader = useSelector((store) => store.task.editTaskHead);
  console.log("header new ", editHeader);
  // console.log(initTaskList);
  const listTask = useSelector((store) => store.task.listTask);

  const dispatch = useDispatch();
  const [lengthError, setLengthError] = useState(false);
  const [duplicateError, setduplicatError] = useState(false);
  let uuId = 20;

  function handleAddTask() {
    console.log(listTask);
    if (taskDes.length === 0) {
      setLengthError(true);
      return;
    }
    for (let element of listTask) {
      console.log(element);

      if (element?.title === taskDes) {
        console.log("got");
        setduplicatError(true);
        return;
      }
    }

    dispatch(
      addTask({
        userId: 1,
        id: ++uuId,
        title: taskDes,
        completed: false,
      })
    );
    setLengthError(false);
    setduplicatError(false);
    setTaskDes("");
  }

  function handleEditTask() {
    console.log({ ...editHeader, title: editDes });
    dispatch(editedTask({ ...editHeader, title: editDes }));
  }

  useEffect(() => {
    setEditDes(editHeader.title);
    setTaskDes("");
  }, [editHeader]);

  return (
    <div className="w-full p-2 mt-10">
      {lengthError && (
        <p className="bg-red-500 text-center w-2/3 text-xl font-semibold text-black rounded-md mx-auto m-4">
          Task Cant be empty
        </p>
      )}

      {duplicateError && (
        <p className="bg-red-500 text-center w-2/3 text-xl font-semibold text-black rounded-md mx-auto m-4">
          Task is already present in Todo List
        </p>
      )}
      <div className="w-full md:w-2/3 flex gap-4 items-center mx-auto">
        <input
          type="text"
          value={editHeader.length === 0 ? taskDes : editDes}
          onChange={(e) => {
            setTaskDes(e.target.value);

            setEditDes(e.target.value);
          }}
          placeholder="Enter your task"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <button className="btn btn-primary " onClick={handleAddTask}>
          Add
        </button>

        <button className="btn btn-primary " onClick={handleEditTask}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
