import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {FaEllipsisVertical} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";
import EditForm from "./EditForm";
import "../index.css"

import {
    addAssignment,
    setAssignment, setAssignmentTitle,
    setDefaultAssignment, updateAssignment
} from "../assignmentsReducer";
import {useSelector, useDispatch} from "react-redux";
import {wait} from "@testing-library/user-event/dist/utils";

function AssignmentEditor() {
    const {courseId} = useParams();
    const {assignmentId} = useParams();

    const navigate = useNavigate();

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const dispatch = useDispatch();

    if (assignmentId !== "NewAssignment") {
        dispatch(setAssignment(assignments.find((assignment) => assignment._id === assignmentId)));
    }

    const handleSave = () => {
        if (assignmentId === "NewAssignment") {
            dispatch(addAssignment({...assignment, course: courseId}));
        } else {
            dispatch(updateAssignment(assignment));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className={"d-flex flex-column"}>
            <div>
                <button className="btn btn-secondary float-end px-1 py-1"><FaEllipsisVertical/></button>
                <div className="wd-green float-end px-3">
                    <FaCheckCircle className={"mb-1"}/> Published
                </div>
            </div>

            <hr/>
            <EditForm/>

            <div>
                <hr/>
                <input type="checkbox"/> Notify users that this content has changed
                <button onClick={handleSave} className="btn btn-danger me-2 float-end">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-secondary me-2 float-end">
                    Cancel
                </Link>
            </div>
        </div>
    );
}

export default AssignmentEditor;
