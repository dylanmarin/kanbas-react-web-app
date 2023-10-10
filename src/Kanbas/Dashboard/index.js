import db from "../Database";
import CourseCard from "./CourseCard";
import "./index.css"
import "../index.css"

function Dashboard() {
    const courses = db.courses;
    return (
        <>
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

                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((course, index) => (
                            <CourseCard
                                course={course}
                                index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;