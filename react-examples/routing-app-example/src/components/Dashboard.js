import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = (logout) => {
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate('/login');
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Dashboard;