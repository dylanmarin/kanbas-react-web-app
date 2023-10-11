import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6";

function ModuleHeadingBar() {

    return (
        <div className="d-flex justify-content-end">
            <button className="btn btn-secondary">Collapse All</button>
            <button className="btn btn-secondary">View Progress</button>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Publish All</a></li>
                    <li><a className="dropdown-item" href="#">Unpublish All</a></li>
                </ul>
            </div>


            <button className="btn btn-danger"><i className="fa-solid fa-plus"></i> Module</button>
            <button className="btn btn-secondary">
                <FaEllipsisVertical/>
            </button>
        </div>
    )
}

export default ModuleHeadingBar;