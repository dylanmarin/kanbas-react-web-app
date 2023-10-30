import db from "../Database";
import CourseCard from "./CourseCard";
import "./index.css"
import "../index.css"
import {useState} from "react";

function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}) {

    return (
        <div className={"wd-main-content-window"}>
            <div>
                <h2>Dashboard</h2>
                <hr/>
            </div>
            <div className="wd-published-courses-window">
                <div>
                    <h2>Published Courses</h2>
                    <hr/>
                </div>

                <div className={"row"}>
                    <div className="d-flex flex-row col flex-wrap">
                        {courses.map((course, index) => (
                            <CourseCard
                                course={course}
                                index={index}
                                setCourse={setCourse}
                                deleteFunction={deleteCourse}/>
                        ))}
                    </div>
                    <div className={"col-2"}>
                        <h5>Course</h5>
                        <input value={course.name} className="form-control"
                               onChange={(e) => setCourse({...course, name: e.target.value})}/>
                        <input value={course.number} className="form-control"
                               onChange={(e) => setCourse({...course, number: e.target.value})}/>
                        <input value={course.startDate} className="form-control" type="date"
                               onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                        <input value={course.endDate} className="form-control" type="date"
                               onChange={(e) => setCourse({...course, endDate: e.target.value})}/>


                        <button className={"btn btn-success"} onClick={addNewCourse}>
                            Add
                        </button>
                        <button className={"btn btn-primary"} onClick={updateCourse}>
                            Update
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
