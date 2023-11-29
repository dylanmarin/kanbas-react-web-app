import * as client from "./client";
import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function Account() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [account, setAccount] = useState(null);

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        console.log('before signout')
        await client.signout();
        console.log('after signout')
        navigate("/Kanbas/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    return (
        <div className="w-50 container text-center">
            <h1>Account</h1>
            {account && (
                <div className={"text-center"}>
                    <div>
                        <input className={"form-control"} value={account.username}
                               onChange={(e) => setAccount({
                                   ...account,
                                   username: e.target.value
                               })}/>
                    </div>
                    <div>
                        <input className={"form-control"} value={account.password}
                               onChange={(e) => setAccount({
                                   ...account,
                                   password: e.target.value
                               })}/>
                    </div>
                    <div>
                        <input className={"form-control"} value={account.firstName}
                               onChange={(e) => setAccount({
                                   ...account,
                                   firstName: e.target.value
                               })}/>
                    </div>
                    <div>
                        <input className={"form-control"} value={account.lastName}
                               onChange={(e) => setAccount({
                                   ...account,
                                   lastName: e.target.value
                               })}/>
                    </div>
                    <div>
                        <input className={"form-control"} value={account.dob}
                               onChange={(e) => setAccount({
                                   ...account,
                                   dob: e.target.value
                               })}/>
                    </div>
                    <div>
                        <input className={"form-control"} value={account.email}
                               onChange={(e) => setAccount({
                                   ...account,
                                   email: e.target.value
                               })}/>
                    </div>
                    <div>
                        <select className={"form-select mb-2"} onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>

                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <div>
                        <button className={"btn btn-primary"} onClick={save}>
                            Save
                        </button>
                        <button onClick={() => navigate("/Kanbas/admin/users")} className="btn btn-warning ">
                            Users
                        </button>
                        <button className={"btn btn-danger"} onClick={signout}>
                            Signout
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Account;
