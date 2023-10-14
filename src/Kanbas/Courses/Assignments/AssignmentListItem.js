import {Link} from "react-router-dom";
import {FaBook, FaCheckCircle} from "react-icons/fa";
import "./index.css";
import {FaEllipsisVertical} from "react-icons/fa6";

function AssignmentListItem({assignmentTitle, link, points}) {

    return (
        <Link className="d-flex flex-row list-group-item wd-list-group-item"
              to={link}>
            <div>
                <FaBook className={"ms-0 mt-3 me-3 wd-green"}/>
            </div>
            <div className="flex-grow-1">
                <p className="wd-assignment-heading m-0">{assignmentTitle}</p>
                <p className="wd-secondary-text m-0">Due Sep 18, 2023 | {JSON.stringify(points)} points</p>
            </div>
            <div className={"mt-3 fs-5 wd-green"}>
                <FaCheckCircle/>
                <FaEllipsisVertical className="ps-1 pe-1"/>
            </div>
        </Link>
    )

}


export default AssignmentListItem;
