import './auth.css';
import {useDispatch, useSelector} from "react-redux";
import {addUser, setCurrent} from "../reduxComp/userSlice";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

function Auth(token, options) {
    const users = useSelector((state) => state.user.users)
    const dispatch = useDispatch()

    function storeUser() {
        let login = document.getElementById("login").value
        let password = document.getElementById("password").value
        let role = document.getElementById("role").checked === true ? "admin" : "user"
        let rights = document.getElementById("rights").value
        let user = {login: login, password: password, role: role, rights: rights}
        if (users.find(u => u.login === login))
            if (users.find(u => u.login === login && u.password === password))
                dispatch(setCurrent(user))
            else alert("User already exists")
        else
            dispatch(addUser(user))
    }

    return (
        <div className={"authBox"}>
            <input type="text" id="login" placeholder={"Login"}/>
            <input type="text" id="password" placeholder={"Password"}/>
            <input type="text" id="rights" placeholder={"Rights"}/>
            <label htmlFor={"role"}>Admin?<input type="checkbox" id="role"/></label>
            <input type="button" id="auth" value={"Login/Register"} onClick={storeUser}/>
            <GoogleLogin onSuccess={(credentialResponse) => console.log(jwtDecode(credentialResponse.credential))} onError={() => console.log("not blahblah")}/>
        </div>
    )
}

export default Auth