import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    listTask: [],
    editTaskHead: [],
  },
  reducers: {
    initialTask: (state, action) => {
      state.listTask = action.payload;
    },
    addTask: (state, action) => {
      state.listTask.unshift(action.payload);
    },
    removeTodo: (state, action) => {
      state.listTask = state.listTask.filter(
        (task) => task.id != action.payload.id
      );
    },
    editedTask: (state, action) => {
      // state.listTask=
      const { id, title } = action.payload;
      console.log(id, title);

      // Find the task to update
      const updatedTask = state.listTask.find((task) => task.id === id);
      console.log(updatedTask);

      if (updatedTask) {
        // Update the title of the found task
        updatedTask.title = title;

        // Remove the existing task from its position
        const updatedTaskIndex = state.listTask.findIndex(
          (task) => task.id === id
        );
        state.listTask.splice(updatedTaskIndex, 1, updatedTask);

        // Add the updated task at the beginning of the list

        //   state.listTask.unshift(action.payload);
      }
    },
    addToHead: (state, action) => {
      state.editTaskHead = action.payload;
    },
  },
});
export const { initialTask, addTask, removeTodo, addToHead, editedTask } =
  taskSlice.actions;
export default taskSlice.reducer;
