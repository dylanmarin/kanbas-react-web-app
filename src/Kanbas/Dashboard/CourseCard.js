import {Link} from "react-router-dom";
import "./index.css"

function CourseCard({course, index}) {
    const {_id, name, number, startDate, endDate} = course;
    const course_heading = name;
    const course_subtitle = name + " - " + number;
    const course_tertiary = _id + " " + endDate;

    return (
        <Link
            to={`/Kanbas/Courses/${_id}`}
            key={index}>
            <div className={"card"}>
                <img className={"card-img-top"} src="/img/react.png" alt="Card image cap"></img>
                <div className={"card-body"}>
                    <h5 className={"card-title m-0"}>{course_heading}</h5>
                    <p className={"card-text m-0"}>{course_subtitle}</p>
                    <p className={"card-text m-0"}>{course_tertiary}</p>
                </div>
            </div>
        </Link>)
}

export default CourseCard;