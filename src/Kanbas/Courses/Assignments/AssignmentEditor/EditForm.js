import React from "react";
import "./index.css"
import {setAssignment, setAssignmentTitle} from "../assignmentsReducer";
import {useDispatch, useSelector} from "react-redux";


function EditForm() {
    {/*redux update text field with reducer*/}
    const dispatch = useDispatch();

    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const [title, setTitle] = React.useState(assignment.title);

    console.log("edit form: " + assignment.title)

    return (<div>
        <h4>Assignment Name</h4>

        <input
            className="form-control mb-2 wd-200-width"
            onChange={(e) => {
                // dispatch(setAssignmentTitle(e.target.value))

                dispatch(setAssignment({...assignment, title: e.target.value}))

                console.log(assignment.title, e.target.value)
            }
            }
            value={assignment.title}
            type="text"
        />

        <textarea
            cols="50" rows="5"
            className="form-control"
            onChange={(e) => {
                dispatch(setAssignment({...assignment, description: e.target.value}))
            }}>
            {assignment.description}
                </textarea><br/><br/>

        <div className="row">
            <div className="col-3">
                <label className="float-end">Points </label>
            </div>
            <div className="col-7">
                <input id="points" type="number" placeholder="Points" value={assignment.points} max="100" min="0"
                       className="form-control wd-200-width"/>
            </div>
        </div>

        <div className="row">
            <div className="col-3">
                <label className="float-end">Assignment Group </label>
            </div>
            <div className="col-7">
                <select id="assignment-group" className="form-select form-control">
                    <option id="assignments">
                        ASSIGNMENTS
                    </option>
                    <option id="quizzes">
                        QUIZZES
                    </option>
                    <option id="exams">
                        EXAMS
                    </option>
                    <option id="projects">
                        PROJECTS
                    </option>
                </select>
            </div>
        </div>

        <div className="row">
            <div className="col-3">
                <label className="float-end">Display Grade as</label>
            </div>
            <div className="col-7">
                <select id="grade-display-type" className="form-select form-control ">
                    <option id="percentage">Percentage</option>
                    <option id="fraction">Fraction</option>
                </select>
            </div>
        </div>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-7">
                <input type="checkbox" className="mb-3"/> Do not count this assignment towards the final grade
            </div>
        </div>

        <div className="row">
            <div className="col-3">
                <label className="float-end">Submission type</label>
            </div>
            <div className="col-7 border border-2 rounded">

                <select id="submission-type" className="mt-2 form-select form-control">
                    <option id="online">Online</option>
                    <option id="in-person">In Person</option>
                </select>

                <div>

                    <h5 className="mt-1 mb-0">Online Entry Options</h5>


                    <input type="checkbox" value="TEXT-ENTRY"
                           name="text-entry" id="chkbox-text-entry" className={"me-1"} checked/>
                    <label>Text Entry</label> <br/>
                    <input type="checkbox" value="WEBSITE"
                           name="website-url" id="chkbox-website-url" className={"me-1"} checked/>
                    <label>Website URL</label> <br/>
                    <input type="checkbox" value="MEDIA"
                           name="website-url" id="chkbox-media-recordings" className={"me-1"} checked/>
                    <label>Media Recordings</label> <br/>
                    <input type="checkbox" value="ANNOTATION"
                           name="student-annotation" id="chkbox-student-annotation" className={"me-1"}/>
                    <label>Student Annotation</label> <br/>
                    <input type="checkbox" value="FILE-UPLOADS"
                           name="student-file-uploads" id="chkbox-file-uploads" className={"me-1"}/>
                    <label>File Uploads</label> <br/><br/>

                    <label>Submission attempts</label>
                    <select id="submission-attempts" className="form-select mb-3">
                        <option id="unlimited">Unlimited</option>
                        <option id="one">1 Attempt</option>
                    </select>

                </div>

            </div>
        </div>

        <div className="row mt-2 wd-edit-assign">
            <div className="col-3">
                <div className="float-end">Assign</div>
            </div>
            <div className="col-7 border border-2 rounded">

                <h6 className="mt-2"><label>Assign to</label></h6>

                <input type="text" value="Everyone"
                       name="assign-to" id="assign-to" className="form-control"/>

                <h6><label>Due</label> <br/></h6>
                <input type="date" value={assignment.dueDate}
                       name="due-date" id="due-date" className="form-control"
                       onChange={(e) => {
                           dispatch(setAssignment({...assignment, dueDate: e.target.value}))
                       }}
                />

                <div className="row">
                    <div className="col wd-height-80">

                        <h6><label>Available from</label></h6>
                        <input type="date" value={assignment.availableFromDate}
                               name="available-from" id="available-from" className="form-control"
                               onChange={(e) => {
                                   dispatch(setAssignment({...assignment, availableFromDate: e.target.value}))
                               }}/>

                    </div>
                    <div className="col wd-height-80">
                        <h6><label>Until</label></h6>
                        <input type="date"
                               name="until" id="until" value={assignment.availableUntilDate}
                               className="form-control"
                               onChange={(e) => {
                                   dispatch(setAssignment({...assignment, availableUntilDate: e.target.value}))
                               }}
                        /><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <button className="btn btn-secondary"><i className="fa-solid fa-plus"></i> Add</button>
                </div>

            </div>

        </div>

    </div>)
}

export default EditForm;
