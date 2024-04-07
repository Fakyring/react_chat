import React, {useState} from "react";
import "./api.css"

function Apitest() {
    const [user, setUser] = useState({login: '', password: ''})
    const [users, setUsers] = useState()

    const [regUser, setRegUser] = useState({login: '', password: '', role: '0', name: ''})

    async function loginClick() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login: user.login, password: user.password})
        };
        const response = await fetch('http://localhost:8000/api/v1/login', requestOptions)
        if (response.ok) {
            const data = await response.json()
            localStorage.setItem('token', data.access_token)
            await getUsers()
        } else {
            alert("Данные для авторизации неверны")
        }
    }

    async function deleteUser() {
        const deleter = document.getElementById("deleter").value
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        const response = await fetch('http://localhost:8000/api/v1/users/' + deleter, requestOptions)
        if (response.ok) {
            alert("Пользователь удалён")
            await getUsers()
        } else {
            const data = await response.json()
            alert(data.data)
        }
    }

    async function registerClick() {
        const formData = new FormData()
        formData.append("login", regUser.login)
        formData.append("password", regUser.password)
        formData.append("role", regUser.role)
        formData.append("name", regUser.name)
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        const response = await fetch('http://localhost:8000/api/v1/users', requestOptions)
        if (response.ok) {
            alert("Пользователь добавлен")
            await getUsers()
        } else {
            alert("Что-то пошло не так")
        }
    }

    async function getUsers() {
        const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        const response = await fetch('http://localhost:8000/api/v1/users', {headers})
        if (response.ok) {
            const data = await response.json()
            setUsers(data.data)
        } else {
            const data = await response.json()
            alert(data.data)
        }
    }

    const handleLoginChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleRegisterChange = (e) => {
        setRegUser({...regUser, [e.target.name.replace("reg_", '')]: e.target.value});
    };

    const handleCheckboxChange = (e) => {
        setRegUser({...regUser, [e.target.name.replace("reg_", '')]: e.target.checked === true ? 1 : 0})
    }

    return (
        <div>
            <div className={"register"}>
                <span>Register</span>
                <label htmlFor={'reg_login'}>Login</label>
                <input id='reg_login' name={'reg_login'} onChange={handleRegisterChange}/>
                <label htmlFor={'reg_password'}>Password: {regUser.password}</label>
                <input id='reg_password' name={'reg_password'} type={'password'} onChange={handleRegisterChange}/>
                <label htmlFor={'reg_name'}>Name</label>
                <input id='reg_name' name={'reg_name'} type={'text'} onChange={handleRegisterChange}/>
                <label htmlFor={'reg_role'}>Role (checked - admin)</label>
                <input id='reg_role' name={'reg_role'} type={'checkbox'} onChange={handleCheckboxChange}/>
                <button onClick={registerClick}>Register</button>
            </div>
            <div className={"login"}>
                <span>Login</span>
                <label htmlFor={'login'}>Name:</label>
                <input id='login' name={'login'} onChange={handleLoginChange}/>
                <label htmlFor={'password'}>Password: {user.password}</label>
                <input id='password' name={'password'} type={'password'} onChange={handleLoginChange}/>
                <button onClick={loginClick}>Login</button>
            </div>
            <div>
                <ul>
                    {users ? users.map(user => (
                        <div>
                            <li>{user.ID} {user.Login} {user.Role}</li>
                        </div>
                    )) : ""}
                </ul>
                <button onClick={getUsers}>Get users</button>
                <label htmlFor={"deleter"}>Deleter</label>
                <input type={"number"} id={"deleter"} name={"deleter"} defaultValue={0}/>
                <button onClick={deleteUser}>Delete user</button>
            </div>
        </div>
    )
}


export default Apitest