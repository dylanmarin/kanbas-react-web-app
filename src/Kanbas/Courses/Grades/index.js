import db from "../../Database";
import {useParams} from "react-router-dom";
import "./index.css";
import {FaGear} from "react-icons/fa6";
import {FaFileExport, FaFileImport, FaFilter} from "react-icons/fa";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="d-flex flex-column">
            <div>
                <a className={"wd-canvas-red"}>Gradebook</a>
                <button className="btn btn-secondary float-end py-2 ms-1"><FaGear/>
                </button>

                <button className="btn btn-secondary float-end py-1 mx-1"><FaFileExport className={"mb-1 me-2"}/>
                    Export
                </button>

                <button className="btn btn-secondary float-end py-1 mx-1"><FaFileImport className={"mb-1 me-2"}/>
                    Import
                </button>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <h5>Student Names</h5>
                    <form id="students">
                        <input id="search-students" className="form-control" placeholder="Search Students"/>
                    </form>
                    <button className="btn btn-secondary"><FaFilter className={"mb-1 ms-0 me-1"}/> Apply Filters
                    </button>
                </div>

                <div className="col">
                    <h5>Assignment Names</h5>
                    <form id="assignments">
                        <input id="search-assignments" className="form-control"
                               placeholder="Search Assignments"/><br/>
                    </form>
                </div>
            </div>

            <table className="table table-responsive table-striped table-bordered text-center ">
                <thead>
                <tr>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                </tr>
                </thead>
                <tbody>
                {enrollments.map((enrollment) => {
                    const user = db.users.find((user) => user._id === enrollment.user);
                    return (
                        <tr>
                            <td><a>{user.firstName} {user.lastName}</a></td>
                            {assignments.map((assignment) => {
                                const grade = db.grades.find(
                                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                return (
                                    <td>
                                        {<input
                                            value={`${grade?.grade}%` || ""}
                                            placeholder={"0%"}
                                            className={"form-control text-center"}
                                        />}
                                    </td>
                                );
                            })}
                        </tr>);
                })}</tbody>
            </table>
            {/*</div>*/}
        </div>);
}

export default Grades;
