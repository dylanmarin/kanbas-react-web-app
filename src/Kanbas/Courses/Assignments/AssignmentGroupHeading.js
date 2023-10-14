import {FaPlus} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";

function AssignmentGroupHeading({type, weight}) {

    return (
        <div className="list-group-item list-group-item-secondary wd-assignment-group-heading">
            <div className="d-inline">
                <h4 className="d-inline">{type}</h4>
            </div>
            <div className="float-end">
                <p className="border border-secondary rounded-pill d-inline px-2 py-1">
                    {weight} of Total
                </p>
                <a className="ps-2 pe-1">
                    <FaPlus/>
                </a>
                <a className="px-1">
                    <FaEllipsisVertical/>
                </a>
            </div>
        </div>
    )
}

export default AssignmentGroupHeading;
