import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo, ToDoStatus } from "../../models/todo.d";

export interface IToDoState {
    todos: ITodo[];
}

const initialState: IToDoState = {
    todos: []
}

type RemovePayload = {
    id: string;
}

const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, newToDo: PayloadAction<ITodo>) => {

            const toDo: ITodo = {
                ...newToDo.payload,
                id: "TD" + Date.now().toString(),
                status: ToDoStatus.PENDING,
            }
            console.log("new todo", toDo)
            state.todos = [
                ...state.todos,
                toDo,
            ]
        },
        remove: (state, removePayLoad: PayloadAction<RemovePayload>) => {
            state.todos = state.todos.filter((todo) => todo.id != removePayLoad.payload.id)
        },
        done: (state, idDoneTask: PayloadAction<String>) => {
            const findIndex = state.todos.findIndex((todo) => todo.id === idDoneTask.payload)
            if (findIndex >= 0) {
                state.todos[findIndex].status = ToDoStatus.DONE;
            }
        }
    }
}
)



export const { add, remove, done } = ToDoSlice.actions

export default ToDoSlice.reducer;