import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface TodoState{
    id: number;
    title: string;
    completed: boolean;
}

const initialState : TodoState[] = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoState>)=> {
            state.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find(todo=> todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed
            }
        }
    },
})

export const {addTodo, toggleTodo} = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;