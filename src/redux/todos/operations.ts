import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const tasks = [];
      let batch = [];
      let p = 1;
      do {
        const { data } = await axios.get(`/tasks?page=${p}`);
        console.log("data ", data);
        batch = data;
        tasks.push(...batch);
        p += 1;
      } while (batch.length == 3);
      console.log("tasks ", tasks);
      return tasks;
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
      const { data } = await axios.patch(`/tasks/${id}`, {
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
      const { data } = await axios.patch(`/tasks/${id}`, { text });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err);
    }
  }
);
