import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: assignment.name,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        editAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentID ? { ...a, editing: true } : a
            ) as any;
        }
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;