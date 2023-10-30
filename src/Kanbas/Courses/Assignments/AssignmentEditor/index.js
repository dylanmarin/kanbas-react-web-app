import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import {FaEllipsisVertical} from "react-icons/fa6";
import "../index.css"
import {FaCheckCircle} from "react-icons/fa";
import EditForm from "./EditForm";
import {
    addAssignment,
    setAssignment,
    setDefaultAssignment, updateAssignment
} from "../assignmentsReducer";
import {useSelector, useDispatch} from "react-redux";

function AssignmentEditor() {
    const {courseId} = useParams();
    const {assignmentId} = useParams();

    const navigate = useNavigate();

    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const assignmentToSet = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const dispatch = useDispatch();

    if (assignmentToSet !== undefined) {
        dispatch(setAssignment(assignmentToSet));
    } else {
        dispatch(setDefaultAssignment());
    }

    const handleSave = () => {
        if (assignmentId === "NewAssignment") {
            dispatch(addAssignment({...assignment, course: courseId, id: Date.now()}));
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
