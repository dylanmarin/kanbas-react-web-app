import ModuleList from "./ModuleList";
import ModuleHeadingBar from "./ModuleHeadingBar";

function Modules() {
    return (
        <div className="col">
            <ModuleHeadingBar/>
            <ModuleList/>
        </div>
    );
}

export default Modules;
