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
        const response = await fetch('/rapi/api/v1/login', requestOptions)
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
        const response = await fetch('/rapi/api/v1/users/' + deleter, requestOptions)
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
        const response = await fetch('/rapi/api/v1/users', requestOptions)
        if (response.ok) {
            alert("Пользователь добавлен")
            await getUsers()
        } else {
            alert("Что-то пошло не так")
        }
    }

    async function getUsers() {
        const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        const response = await fetch('/rapi/api/v1/users', {headers})
        if (response.ok) {
            const data = await response.json()
            setUsers(data.data)
            document.getElementById("users").innerHTML = ""
        } else {
            const data = await response.json()
            setUsers(null)
            document.getElementById("users").innerHTML = "Нет прав"
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
            <div className={"auth"}>
                <div className={"register"}>
                    <span>Регистрация</span>
                    <label htmlFor={'reg_login'}>Логин</label>
                    <input id='reg_login' name={'reg_login'} onChange={handleRegisterChange}/>
                    <label htmlFor={'reg_password'}>Пароль: {regUser.password}</label>
                    <input id='reg_password' name={'reg_password'} type={'password'} onChange={handleRegisterChange}/>
                    <label htmlFor={'reg_name'}>Name</label>
                    <input id='reg_name' name={'reg_name'} type={'text'} onChange={handleRegisterChange}/>
                    <label className="tooltip" htmlFor={'reg_role'}>Роль <span
                        className='tooltiptext'>Галочка - админ</span></label>
                    <input id='reg_role' name={'reg_role'} type={'checkbox'} onChange={handleCheckboxChange}/>
                    <button onClick={registerClick}>Регистрация</button>
                </div>
                <div className={"login"}>
                    <span>Авторизация</span>
                    <label htmlFor={'login'}>Логин:</label>
                    <input id='login' name={'login'} onChange={handleLoginChange}/>
                    <label htmlFor={'password'}>Пароль: {user.password}</label>
                    <input id='password' name={'password'} type={'password'} onChange={handleLoginChange}/>
                    <button onClick={loginClick}>Войти</button>
                </div>
            </div>
            <div>
                <span id={"users"}></span>
                <div className={"usersList"}>
                    {users ? users.map(user => (
                        <div>
                            <span>id: {user.ID} | {user.Login} | {user.Role}</span>
                        </div>
                    )) : ""}
                </div>
                <div className={"centered"}>
                    <label htmlFor={"deleter"}>Удалить по id: </label>
                    <input style={{marginBottom: "10px"}} type={"number"} id={"deleter"} name={"deleter"}
                           defaultValue={0}/>
                    <br/>
                    <button onClick={deleteUser}>Удалить пользователя</button>
                </div>
            </div>
        </div>
    )
}


export default Apitest