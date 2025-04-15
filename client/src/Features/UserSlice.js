import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";
import axios from "axios";

//const initialState = { value: UsersData }; //list of user is an object with empty array as initial value
const initialState = {
  user: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

//Create the thunk
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData) => {
    try {
      const response = await axios.post("http://localhost:3001/registerUser", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      console.log(response);
      const user = response.data.user; //retrieve the response from the server
      const msg = response.data.msg;
      return user; //return the response from the server as payload to the thunk
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("users/login", async (userData) => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email: userData.email,
      password: userData.password,
    });
    const user = response.data.user;
    console.log(response);
    return user;
  } catch (error) {
    //handle the error
    const errorMessage = "Invalid credentials";
    alert(errorMessage);
    throw new Error(errorMessage);
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.email !== action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.email === action.payload.email) {
          user.name = action.payload.name;
          user.password = action.payload.password;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isError = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions; //export the function

export default userSlice.reducer;
