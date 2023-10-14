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
import {Link, useLocation} from "react-router-dom";
import "./index.css"

function SmallScreenNavigation({courseId}) {

    const kanbasNavListItems = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const kanbasNavItemsToIconsMap = {}

    const courseNavListItems = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const courseNavItemsToIconsMap = {}
    return (
        <div className="d-lg-none bg-black wd-hidden-courses-nav">
            <div className="row">
                <div className="col-1 wd-dropdown-main-navigation dropdown ms-2 ">
                    <a className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        <FaBars/>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to={""}>
                                <FaUser className={"wd-account-icon"}/> Account
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaGaugeHigh/> Dashbord
                            </Link>
                        </li>
                        <li className="wd-active">
                            <Link to={""}>
                                <FaBook/>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaCalendarDays/>
                                Calendar
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaEnvelopeOpenText/>
                                Inbox
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaClock/>
                                History
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaDisplay/>
                                Studio</Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaCircleRight/>
                                Commons</Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <FaCircleQuestion/>
                                Help
                            </Link>
                        </li>

                        {/*{kanbasNavListItems.map((page, index) => {*/}
                        {/*    return (<li key={index}>*/}
                        {/*        <Link to={`Kanbas/${page}`}>*/}
                        {/*            {kanbasNavItemsToIconsMap[page]} {page}*/}
                        {/*        </Link>*/}
                        {/*    </li>)*/}
                        {/*})}*/}
                    </ul>
                </div>

                <div className="col wd-hidden-courses-nav-course-title  text-center">

                    <h6 className="my-0">CS5610 Fall 2023 Section 1</h6>
                    Modules


                </div>

                <div className="col-1 wd-dropdown-courses-navigation dropdown me-2">
                    <a className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        <FaAngleDown/>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="wd-active">
                            <Link to={""}><FaHouse/> Home</Link>
                        </li>
                        <li>
                            <Link to={""}><FaNetworkWired/> Modules</Link>
                        </li>
                        <li>
                            <Link to={""}><FaPlug/> Piazza</Link>
                        </li>
                        <li>
                            <Link to={""}><FaPlug/> Zoom Meetings</Link>
                        </li>
                        <li>
                            <Link to={""}><FaBook/> Assignments</Link>
                        </li>
                        <li>
                            <Link to={""}><FaRocket/> Quizzes</Link>
                        </li>
                        <li>
                            <Link to={""}><FaBook/> Grades</Link>
                        </li>
                        <li>
                            <Link to={""}><FaPeopleGroup/> People</Link>
                        </li>
                        <li>
                            <Link to={""}><FaPlug/> Panopto Video</Link>
                        </li>
                        <li>
                            <Link to={""}><FaComments/> Discussions</Link>
                        </li>
                        <li>
                            <Link to={""}><FaBullhorn/> Announcements</Link>
                        </li>
                        <li>
                            <Link to={""}><FaNoteSticky/> Pages</Link>
                        </li>
                        <li>
                            <Link to={""}><FaFile/> Files</Link>
                        </li>
                        <li>
                            <Link to={""}><FaClipboard/> Rubrics</Link>
                        </li>
                        <li>
                            <Link to={""}><FaBullseye/> Outcomes</Link>
                        </li>
                        <li>
                            <Link to={""}><FaCircle/> Collaborations</Link>
                        </li>
                        <li>
                            <Link to={""}><FaBook/> Syllabus</Link>
                        </li>
                        <li>
                            <Link to={""}><FaGear/> Settings</Link>
                        </li>


                        {/*{courseNavListItems.map((coursePage, index) => {*/}
                        {/*    return (<li key={index}>*/}
                        {/*        <Link to={`Kanbas/Courses/${courseId}/${coursePage}`}>*/}
                        {/*            {courseNavItemsToIconsMap[coursePage]} {page}*/}
                        {/*        </Link>*/}
                        {/*    </li>)*/}
                        {/*})}*/}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SmallScreenNavigation;
