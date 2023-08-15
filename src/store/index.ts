import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from './reducers/todo.r';
export const store = configureStore({
    reducer: {
        todo: ToDoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch;