import {Link} from "react-router-dom";
import {FaBook, FaCheckCircle} from "react-icons/fa";
import "./index.css";
import {FaEllipsisVertical} from "react-icons/fa6";
import {deleteAssignment, setAssignment} from "./assignmentsReducer";
import {useDispatch} from "react-redux";
import assignments from "./index";

function AssignmentListItem({assignment, link}) {
    const {title, dueDate, points, _id} = assignment;
    const dispatch = useDispatch();

    return (
        <Link className="d-flex flex-row list-group-item wd-list-group-item"
              to={link}>
            <div>
                <FaBook className={"ms-0 mt-3 me-3 wd-green"}/>
            </div>
            <div className="flex-grow-1">
                <p className="wd-assignment-heading m-0">{title}</p>
                <p className="wd-secondary-text m-0">Due {new Date(dueDate).toDateString()} | {JSON.stringify(points)} points</p>
            </div>
            <div className={"mt-3 fs-5 wd-green"}>
                <button className={"btn btn-danger px-1 py-0 me-1"} onClick={(e) => {
                    e.preventDefault()
                    dispatch(deleteAssignment(_id))
                }}
                >Delete
                </button>
                <FaCheckCircle/>
                <FaEllipsisVertical className="ps-1 pe-1"/>
            </div>
        </Link>
    )

}


export default AssignmentListItem;
