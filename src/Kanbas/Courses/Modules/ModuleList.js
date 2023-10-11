import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {FaCircleCheck, FaEllipsisVertical, FaUpRightFromSquare} from "react-icons/fa6";


function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;
    return (
        <div className="wd-course-modules">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, moduleIndex) => (
                        <ul key={moduleIndex} className="list-group">
                            <li className="list-group-item wd-li-heading list-group-item-dark">
                                <div>
                                    <h5 className={"d-inline"}>{module.name}</h5> - {module.description}
                                    {/*<FaEllipsisVertical className={"d-inline float-end"}/>*/}
                                    {/*<FaCircleCheck className={"d-inline float-end"}/>*/}
                                </div>
                            </li>
                            {
                                module.content?.map((content, subIndex) => {
                                    return (
                                        <li key={subIndex}
                                            className={`list-group-item ${content.heading ? "wd-module-sub-heading" : "wd-module-sub-item"}`}>
                                            {
                                                content.link ?
                                                    <Link to={""}>
                                                        {content.title} Links to an External Site. <FaUpRightFromSquare/>
                                                    </Link> :
                                                    content.title
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ))
            }
        </div>
    )
        ;
}

export default ModuleList;