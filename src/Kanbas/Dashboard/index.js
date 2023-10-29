import db from "../Database";
import CourseCard from "./CourseCard";
import "./index.css"
import "../index.css"
import {useState} from "react";

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses,
            {
                ...course,
                _id: new Date().getTime()
            }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

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
