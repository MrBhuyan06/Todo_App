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
    <div className="bg-gray-100 rounded-md mt-10 w-2/3 mx-auto">
      <p className="text-center text-3xl underline text-blue-600 font-semibold">
        List Of Task
      </p>
      <Filter />
      {listTask.length === 0 ? (
        <h1>Add The Task Please</h1>
      ) : (
        listTask.map((task) => {
          return <Todo key={task.id} info={task} />;
        })
      )}
    </div>
  );
};

export default TodoBody;
