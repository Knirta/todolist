import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: IRegisterCredentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

interface ILoginCredentials {
  email: string;
  password: string;
}

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: ILoginCredentials, thunkAPI) => {
    try {
      const { data } = await axios.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
    clearAuthHeader();
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null)
      return thunkAPI.rejectWithValue("Unable to fetch user");

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get("users/me");
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
