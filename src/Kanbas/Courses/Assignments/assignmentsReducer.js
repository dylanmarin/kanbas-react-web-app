import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {
        "title": "New Assignment",
        "description": "Default Description",
        "type": "assignment",
        "points": 100,
        "dueDate": "2023-01-15",
        "availableFromDate": "2023-01-01",
        "availableUntilDate": "2023-01-15"
    },
};

const assignmentsSlice = createSlice({
        name: "assignments",
        initialState,
        reducers: {
            setDefaultAssignment: (state, action) => {
                state.assignment = initialState.assignment
            },
            addAssignment: (state, action) => {
                state.assignments = [
                    {...action.payload, _id: new Date().getTime().toString()},
                    ...state.assignments,
                ];
            },
            deleteAssignment: (state, action) => {
                state.assignments = state.assignments.filter(
                    (assignment) => assignment._id !== action.payload
                );
            },
            updateAssignment: (state, action) => {
                state.assignments = state.assignments.map((assignment) => {
                    if (assignment._id === action.payload._id) {
                        return action.payload;
                    } else {
                        return assignment;
                    }
                });
            },
            setAssignment: (state, action) => {
                state.assignment = action.payload;
            },
            setAssignmentTitle: (state, action) => {
                state.assignment.title = action.payload;
            }
        },
    })
;


export const {
    addAssignment, deleteAssignment,
    updateAssignment, setAssignment,
    setDefaultAssignment, setAssignmentTitle
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
