import React, { useEffect, useState } from "react";
import Filter from "./Filter.js";
import Todo from "./Todo.js";

const TodoBody = () => {
  const [listTask, setListTask] = useState([]);
  console.log("heelo");

  useEffect(() => {
    getAllTodo();
  }, []);

  async function getAllTodo() {
    const streamData = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    const data = await streamData.json();

    setListTask(data);
  }

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
