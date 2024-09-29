import React from "react";
import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <div>
            <h2>Home Page</h2>
            <p>Welcome to Home page</p>
            <link to="/login"> Go To Login Page</link>
        </div>
    )
}

export default Home;