import Modules from "../Modules";
import StatusBar from "./StatusBar";

function Home() {
    return (
        <div className={"row"}>
            <Modules/>
            <StatusBar/>
        </div>
    );
}

export default Home;
