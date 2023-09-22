import React, { useEffect, useState } from "react";
import Filter from "./Filter.js";
import Todo from "./Todo.js";
import { useDispatch, useSelector } from "react-redux";
import { initialTask } from "../redux/taskSlice.js";
import store from "../redux/store.js";

const TodoBody = () => {
  const [alllistTask, setAllListTask] = useState([]);
  const [listTask, setListTask] = useState([]);
  const dispatch = useDispatch();
  const initTaskList = useSelector((store) => store.task.listTask);

  console.log("here again", initTaskList);

  function handleRenderAllTask() {
    console.log("render");
    setListTask(initTaskList);
  }
  function handleRenderCompleteTask() {
    setListTask(initTaskList.filter((task) => task.completed === true));
  }
  function handleRenderPendingTask() {
    setListTask(initTaskList.filter((task) => task.completed === false));
  }

  useEffect(() => {
    getAllTodo();
  }, []);

  async function getAllTodo() {
    const streamData = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    const data = await streamData.json();
    setListTask(data);
    dispatch(initialTask(data));
  }
  useEffect(() => {
    setListTask(initTaskList);
    setAllListTask(initTaskList);
  }, [initTaskList]);
  // console.log("render");
  return (
    <div className=" ">
      <div className="flex justify-between  w-full md:w-2/3 mx-auto bg-slate-200 rounded-lg m-8">
        <div className="form-control   ">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              label="pendingtask"
              onClick={handleRenderPendingTask}
              //   checked={sort === "hightolow" ? true : false}
            />
            <span className="label-text">Pending Task</span>
          </label>
        </div>
        <div className="form-control   ">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              label="alltask"
              onClick={handleRenderAllTask}
              //   checked={sort === "hightolow" ? true : false}
            />
            <span className="label-text">All Tasks</span>
          </label>
        </div>
        <div className="form-control  ">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              label="completedtask"
              onClick={handleRenderCompleteTask}
            />
            <span className="label-text">Completed Tasks</span>
          </label>
        </div>
      </div>
      <div className="bg-transparent rounded-md mt-10 w-2/3 mx-auto">
        <p className="text-center text-3xl underline text-blue-600 font-semibold">
          List Of Task
        </p>

        {listTask.length === 0 ? (
          <h1>Add The Task Please</h1>
        ) : (
          listTask.map((task) => {
            return <Todo key={task.id} info={task} />;
          })
        )}
      </div>
    </div>
  );
};

export default TodoBody;
