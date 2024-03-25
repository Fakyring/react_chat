import React, {useState} from "react";

function Apitest() {
    const [user, setUser] = useState({login: '', password: ''})
    const [users, setUsers] = useState()

    function loginClick() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login: user.login, password: user.password})
        };
        fetch('/rapi/api/v1/login', requestOptions)
            .then(response => response.json())
            .then(data => localStorage.setItem('token', data.access_token));
    }

    function getUsers() {
        const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        fetch('/rapi/api/v1/users', {headers})
            .then(response => response.json())
            .then(data => setUsers(data.data));
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <div>
                <label htmlFor={'login'}>Name:</label>
                <input id='login' name={'login'} onChange={handleChange}/>
                <label htmlFor={'password'}>{user.password}:</label>
                <input id='password' name={'password'} type={'password'} onChange={handleChange}/>
                <button onClick={loginClick}>Login</button>
            </div>
            <div>
                <ul>
                    {users ? users.map(user => (
                        <div>
                            <li>{user.ID} {user.Login}</li>
                        </div>
                    )) : ""}
                </ul>
                <button onClick={getUsers}>Get users</button>
            </div>
        </div>
    )
}


export default Apitest