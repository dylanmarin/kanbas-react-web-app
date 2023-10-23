import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Navigate, Route, Routes} from "react-router";
import Nav from "../Nav";

function Labs() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Navigate to="/Labs/a3"/>}/>
                <Route path="/a3" element={<Assignment3/>}/>
                <Route path="/a4" element={<Assignment4/>}/>
            </Routes>
        </>
    );
}

export default Labs;

