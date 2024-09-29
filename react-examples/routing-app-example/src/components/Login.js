import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (login) => {
    const navigate = useNavigate();

    const handleLogin = () =>{
        login(); // Call the login function passed as a prop
        navigate('/dashboard');
    }

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
};

export default Login;