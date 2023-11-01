import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/tasks");
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text: string, thunkAPI) => {
    try {
      const { data } = await axios.post("/tasks", { text });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/tasks/${id}`);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "todos/toggleCompleted",
  async ({ id, completed }: { id: string; completed: boolean }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/tasks/${id}`, {
        completed: !completed,
      });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({ id, text }: { id: string; text: string }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/tasks/${id}`, { text });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err);
    }
  }
);
