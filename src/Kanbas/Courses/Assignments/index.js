import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import SearchbarSubHeader from "./SearchbarSubHeader"
import AssignmentGroupHeading from "./AssignmentGroupHeading";
import AssignmentListItem from "./AssignmentListItem";

const assignmentTypes = ["assignment", "quiz", "exam", "project"]
const assignmentTypeToWeightMap = {
    assignment: 40,
    quiz: 10,
    exam: 20,
    project: 30
}
const assignmentTypeToHeaderStringMap = {
    assignment: "ASSIGNMENTS",
    quiz: "QUIZZES",
    exam: "EXAMS",
    project: "PROJECT"
}


function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);


    return (
        <div>
            <SearchbarSubHeader/>

            {assignmentTypes.map((assignmentType, index) => (
                <div className="list-group" key={index}>
                    <AssignmentGroupHeading type={assignmentTypeToHeaderStringMap[assignmentType]}
                                            weight={`${assignmentTypeToWeightMap[assignmentType]}%`}/>

                    {courseAssignments.filter((assignment) => assignmentType === assignment.type).map((assignment) => (
                        <AssignmentListItem assignmentTitle={assignment.title}
                                            link={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                            key={assignment._id}
                                            points={assignment.points}/>
                    ))}
                </div>
            ))}

        </div>
    );
}

export default Assignments;
