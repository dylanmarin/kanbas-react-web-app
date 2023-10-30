import React from "react";
import {Link, useParams} from "react-router-dom";
import "./index.css";
import {FaUpRightFromSquare} from "react-icons/fa6";
import {useSelector, useDispatch} from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="wd-course-modules">
            <ul className={"list-group"}>
                <li className="list-group-item">
                    <input className={"form-control"}
                           value={module.name}
                           onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}
                    />
                    <textarea className={"form-control"} value={module.description}
                              onChange={(e) => dispatch(setModule({...module, description: e.target.value}))}
                    />

                    <button className={"btn btn-success me-2"}
                            onClick={() => dispatch(addModule({...module, course: courseId}))}>Add
                    </button>
                    <button className={"btn btn-primary"}
                            onClick={() => dispatch(updateModule(module))}>Update
                    </button>
                </li>
            </ul>

            {modules
                .filter((module) => module.course === courseId)
                .map((module, moduleIndex) => (
                    <ul key={moduleIndex} className="list-group">
                        <li className="list-group-item wd-li-heading list-group-item-dark">
                            <div className={"row"}>
                                <div className={"col pe-0"}>

                                    <h5 className={"d-inline"}>{module.name}</h5> - {module.description}
                                </div>
                                <div className={"col-auto ps-0"}>
                                    <button className={"btn btn-danger float-end py-0 px-1 ms-1"}
                                            onClick={() => dispatch(deleteModule(module._id))}>Delete
                                    </button>
                                    <button className={"btn btn-success float-end py-0 px-1"}
                                            onClick={() => dispatch(setModule(module))}>Edit
                                    </button>
                                </div>
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
                                                    {content.title} Links to an External
                                                    Site. <FaUpRightFromSquare/>
                                                </Link> :
                                                content.title
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                ))}
        </div>
    )
        ;
}

export default ModuleList;
