import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/todos/todosReducer";

// export type TodoType = {
//     id: string;
//     title: string;
// };

// export interface LabState {
//     helloReducer: {
//         message: string;
//     };
//     counterReducer: {
//         count: number;
//     };
//     addReducer: {
//         sum: number;
//     };
//     todosReducer: {
//         todos: TodoType[];
//         todo: TodoType;
//     };

// }

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer
    },
});

export default store;