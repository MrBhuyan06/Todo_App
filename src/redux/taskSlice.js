import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    listTask: [],
  },
  reducers: {
    initialTask: (state, action) => {
      state.listTask = action.payload;
    },
    addTask: (state, action) => {
      state.listTask.unshift(action.payload);
    },
  },
});
export const { initialTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;
