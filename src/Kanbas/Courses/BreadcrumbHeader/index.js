import "./index.css";
import {Link, useLocation, useParams} from "react-router-dom";
import db from "../../Database";
import {RxHamburgerMenu} from "react-icons/rx";

function BreadcrumbHeader() {
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const pathParts = useLocation().pathname.split("/");
    const pathPartsFromCourseIdExcludingLast = pathParts.slice(pathParts.indexOf(courseId), pathParts.length - 1);

    let link = "/Kanbas/Courses";

    return (
        <div className="row wd-breadcrumb-heading-container">
            <div className="col-auto wd-hamburger-icon">
                <RxHamburgerMenu/>
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
                                <li key={index} className="breadcrumb-item">
                                    <Link
                                        to={link}>
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
