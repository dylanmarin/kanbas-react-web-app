import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import axios from "axios";
import store from "./store";
import {Provider} from "react-redux";


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        _id: {'$oid': null}
    });

    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    }, [courses]);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({name: ""});
    };

    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id.$oid}`
        );

        setCourses(courses.filter(
            (c) => c._id.$oid !== course._id.$oid));
    };

    const updateCourse = async (course) => {
        const response = await axios.put(
            `${URL}/${course._id.$oid}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id.$oid) {
                    return course;
                }
                return c;
            })
        );
    };


    return (
        <Provider store={store}>
            <div className={"row mw-100"}>
                <KanbasNavigation/>
                <div className={"col"}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard"/>}/>
                        <Route path="Account" element={<h1>Account</h1>}/>
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                        }/>
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
                        <Route path="Courses" element={<Navigate to={"/Kanbas/Dashboard"}/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;
