import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";

const initialState = { value: UsersData }; //list of user is an object with empty array as initial value

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
