import React, { useState } from "react";
import './style.css'
import { login } from "../../api/auth";


const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    const data = await login(username, password);
                    const token = data.data.token;
                    localStorage.setItem("token", token);
                }}
            >
                <div class="title">
                    <h1>Login/Register</h1>
                </div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        value={username}
                        type="text"
                        required
                        minLength={5}
                        placeholder="username"
                        onChange={(event) => setUserName(event.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        value={password}
                        type="password"
                        required
                        minLength={7}
                        placeholder="password"
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div >
    );
};
export default Login;