import * as client from "./client";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account");
    };
    return (
        <div className={"container text-center"}>
            <h1>Signin</h1>
            <form>
                <div className={"my-1"}>
                    <input value={credentials.username}
                           onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
                </div>
                <div className={"my-1"}>
                    <input value={credentials.password}
                           onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
                </div>
                <button className={"my-1 btn btn-primary"} onClick={signin}> Signin</button>
            </form>
        </div>
    );
}

export default Signin;
