import {Link, useLocation} from "react-router-dom";
import {RiAccountCircleFill} from "react-icons/ri";
import {BsSpeedometer2} from "react-icons/bs";
import {FaBook, FaCalendarAlt} from "react-icons/fa";
import {AiOutlineClockCircle, AiOutlineInbox} from "react-icons/ai";
import {FaCircleQuestion, FaCircleRight, FaDisplay} from "react-icons/fa6";
import "./index.css";
import "../index.css"


function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linksToIconsMap = {
        Account: <RiAccountCircleFill className={"wd-account-icon"}/>,
        Dashboard: <BsSpeedometer2/>,
        Courses: <FaBook/>,
        Calendar: <FaCalendarAlt/>,
        Inbox: <AiOutlineInbox/>,
        History: <AiOutlineClockCircle/>,
        Studio: <FaDisplay/>,
        Commons: <FaCircleRight/>,
        Help: <FaCircleQuestion/>,
    }
    const {pathname} = useLocation();
    return (
        <>
            <div className="list-group wd-kanbas-navigation rounded-0 p-0" style={{width: 85}}>
                <img src="/img/neu.png"></img>
                {links.map((link, index) => (
                        <Link
                            key={index}
                            to={`/Kanbas/${link}`}
                            className={`list-group-item ${pathname.includes(link) && "active"}`}>
                            <div className={"wd-kanbas-navigation-icon"}>
                                {linksToIconsMap[link]}
                            </div>
                            {link}
                        </Link>
                    )
                )}
            </div>
            <div className={"wd-kanbas-navigation-spacer col-auto"}></div>
        </>
    )
}

export default KanbasNavigation;

