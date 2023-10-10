import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css"

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const {courseId} = useParams();
    const {pathname} = useLocation();
    return (
        <ul className="wd-secondary-navigation">
            {links.map((link, index) => (
                <li>
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item ${pathname.includes(link.replace(" ", "%20")) && "active"}`}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    );
}


export default CourseNavigation;

