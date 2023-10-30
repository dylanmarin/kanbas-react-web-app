import {FaPlus} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";
import "./index.css";
import {Link} from "react-router-dom";

function SearchbarSubHeader() {
    return (
        <div className={"wd-subheading-bar"}>
            <input type="text" id="assignments-search"
                   placeholder="Search for Assignments" className="form-control w-25 d-inline m-0"/>
            <button className="btn btn-secondary float-end mx-1 wd-ellipses-grey-button"><FaEllipsisVertical/></button>

            <Link to={"NewAssignment"} >
                <button className="btn btn-danger float-end mx-1"><FaPlus/> Assignment</button>
            </Link>

            <button className="btn btn-secondary float-end mx-1"><FaPlus/> Group</button>
            <hr/>
        </div>
    )
}

export default SearchbarSubHeader;
