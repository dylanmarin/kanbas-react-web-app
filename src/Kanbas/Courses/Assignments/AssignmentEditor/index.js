import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import {FaEllipsisVertical} from "react-icons/fa6";
import "../index.css"
import {FaCheckCircle} from "react-icons/fa";
import EditForm from "./EditForm";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);
    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
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


            <EditForm assignment={assignment}/>


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
