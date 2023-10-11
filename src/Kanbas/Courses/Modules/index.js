import ModuleList from "./ModuleList";
import ModuleHeadingBar from "./ModuleHeadingBar";
function Modules() {
    return (
        <div>
            <div className="col">
                <ModuleHeadingBar/>
                <ModuleList/>
            </div>
        </div>
    );
}

export default Modules;
