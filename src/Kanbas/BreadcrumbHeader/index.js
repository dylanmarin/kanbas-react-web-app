import "./index.css";
import {FaBars} from "react-icons/fa";
import {Link, useLocation, useParams} from "react-router-dom";
import db from "../Database";

function BreadcrumbHeader() {
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const pathParts = useLocation().pathname.split("/");
    const pathPartsFromCourseIdExcludingLast = pathParts.slice(pathParts.indexOf(courseId), pathParts.length - 1);

    let link = "/Kanbas/Courses";

    return (
        <div className="row wd-breadcrumb-heading-container">
            <div className="col-auto wd-hamburger-icon">
                <FaBars/>
            </div>
            <div className="col float-start">
                <nav className="wd-breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {pathPartsFromCourseIdExcludingLast.map((pathPart, index) => {
                            let pathPartToDisplay = pathPart;
                            if (pathPart === courseId) {
                                pathPartToDisplay = `${course.name} - ${courseId}`;
                            }

                            link = `${link}/${pathPart}`
                            return (
                                <li className="breadcrumb-item">
                                    <Link
                                        to={link}
                                        key={index}>
                                        {pathPartToDisplay}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="breadcrumb-item active"
                            aria-current="page">{pathParts.pop().replace("%20", " ")}</li>
                    </ol>
                </nav>
            </div>
            <hr/>
        </div>
    )
}

export default BreadcrumbHeader;