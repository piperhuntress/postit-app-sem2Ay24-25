import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";

const initialState = { value: UsersData }; //list of user is an object with empty array as initial value

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {},
    updateUser: (state, action) => {},
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions; //export the function

export default userSlice.reducer;
