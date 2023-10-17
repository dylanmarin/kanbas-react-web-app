import {
    FaAngleDown,
    FaBars,
    FaBook, FaBullhorn, FaBullseye, FaCircle, FaClipboard,
    FaClock, FaComments,
    FaEnvelopeOpenText, FaFile,
    FaNetworkWired,
    FaPlug,
    FaRocket,
    FaUser
} from "react-icons/fa";
import {
    FaCalendarDays,
    FaCircleQuestion,
    FaCircleRight,
    FaDisplay,
    FaGaugeHigh, FaGear,
    FaHouse, FaNoteSticky,
    FaPeopleGroup
} from "react-icons/fa6";
import {Link} from "react-router-dom";
import "./index.css"

function SmallScreenNavigation({courseId}) {

    const kanbasNavListItems = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const kanbasNavItemsToIconsMap = {
        Account: <FaUser className={"wd-account-icon"}/>,
        Dashboard: <FaGaugeHigh/>,
        Courses: <FaBook/>,
        Calendar: <FaCalendarDays/>,
        Inbox: <FaEnvelopeOpenText/>,
        History: <FaClock/>,
        Studio: <FaDisplay/>,
        Commons: <FaCircleRight/>,
        Help: <FaCircleQuestion/>
    }

    const courseNavListItems = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const courseNavItemsToIconsMap = {
        Home: <FaHouse/>,
        Modules: <FaNetworkWired/>,
        Piazza: <FaPlug/>,
        "Zoom Meetings": <FaPlug/>,
        Assignments: <FaBook/>,
        Quizzes: <FaRocket/>,
        Grades: <FaBook/>,
        People: <FaPeopleGroup/>,
        "Panopto Video": <FaPlug/>,
        Discussions: <FaComments/>,
        Announcements: <FaBullhorn/>,
        Pages: <FaNoteSticky/>,
        Files: <FaFile/>,
        Rubrics: <FaClipboard/>,
        Outcomes: <FaBullseye/>,
        Collaborations: <FaCircle/>,
        Syllabus: <FaBook/>,
        Settings: <FaGear/>
    }


    return (
        <>
            <div className="d-lg-none bg-black wd-hidden-courses-nav">
                <div className="row">z
                    <div className="col-1 dropdown ms-2 ">
                        <a className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            <FaBars/>
                        </a>
                        <ul className="dropdown-menu">
                            {kanbasNavListItems.map((pageName, index) => {
                                return (<li key={index}>
                                    <Link to={`/Kanbas/${pageName}`}>
                                        {kanbasNavItemsToIconsMap[pageName]} {pageName}
                                    </Link>
                                </li>)
                            })}
                        </ul>
                    </div>

                    <div className="col-auto flex-grow-1 wd-hidden-courses-nav-course-title  text-center">

                        <h6 className="my-0">CS5610 Fall 2023 Section 1</h6>
                        Modules


                    </div>

                    <div className="col-1 dropdown me-2">
                        <a className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            <FaAngleDown/>
                        </a>
                        <ul className="dropdown-menu">
                            {courseNavListItems.map((coursePage, index) => {
                                return (<li key={index}>
                                    <Link to={`/Kanbas/Courses/${courseId}/${coursePage}`}>
                                        {courseNavItemsToIconsMap[coursePage]} {coursePage}
                                    </Link>
                                </li>)
                            })}
                        </ul>
                    </div>

                </div>
            </div>
            <div className={"d-lg-none wd-hidden-courses-nav-spacer m-0"}/>
        </>
    )
}

export default SmallScreenNavigation;
