import "./index.css"
import {FaBan, FaBell, FaBullhorn, FaBullseye, FaCalendar, FaCheckCircle, FaFileImport} from "react-icons/fa";
import {FaChartSimple, FaCircleRight} from "react-icons/fa6";

function StatusBar() {
    return (<div className="col-3 wd-course-home-right-sidebar">
            {/*d-none d-lg-none d-xl-block*/}
            <h4>Course Status</h4>

            <button className="btn btn-secondary"><FaBan/> Unpublish</button>
            <button className="btn btn-success disabled"><FaCheckCircle/> Published</button>

            <div className="d-flex flex-column mt-2">
                <button className="btn btn-secondary my-1"><FaFileImport/> Import Existing
                    Content
                </button>
                <button className="btn btn-secondary my-1"><FaCircleRight/> Import From Commons
                </button>
                <button className="btn btn-secondary my-1"><FaBullseye/> Choose Home Page
                </button>
                <button className="btn btn-secondary my-1"><FaChartSimple/> View Course Stream
                </button>
                <button className="btn btn-secondary my-1"><FaBullhorn/> New Announcement
                </button>
                <button className="btn btn-secondary my-1"><FaChartSimple/> New Analytics
                </button>
                <button className="btn btn-secondary my-1"><FaBell/> View Course
                    Notifications
                </button>
            </div>


            <div className="mt-4">
                <h4>To Do</h4>
                <a href="#"><i className="fa-solid fa-circle-info"></i> Grade A1 - ENV + HTML</a>
                <p>100 points - Sep 11 at 11:59pm</p>
            </div>

            <div className="mt-4">
                <h4 className="d-inline">Coming Up</h4>
                <a href="#" className="float-end"><FaCalendar className={"wd-calendar-icon"}/> View Calendar</a>
                <ul className="list-unstyled">
                    <li className="my-2">
                        <a href="#"><FaCalendar className={"wd-calendar-icon"}/> Lecture CS4550.12631.202410</a>
                        <p>
                            Sep 7 at 11:45am
                        </p>
                    </li>
                    <li className="my-2">
                        <a href="#"><FaCalendar className={"wd-calendar-icon"}/> Lecture CS4550.12631.202410</a>
                        <p>Sep 11 at 11:45am</p>
                    </li>
                    <li className="my-2">
                        <a href="#"><FaCalendar className={"wd-calendar-icon"}/> CS5610 06 SP23 Lecture</a>
                        <p>Sep 11 at 6pm</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StatusBar;