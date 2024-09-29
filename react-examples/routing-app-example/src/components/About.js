import React from "react";
import { Link, Outlet } from "react-router-dom";

const About =()=>{
    return(
        <div>
            <h2>About Page</h2>
            <p>Welcome to About page</p>
            
            {/* Add links for nested routes */}

            <nav>
                <ul>
                    <li>
                        <Link to="team">Our Team</Link>
                    </li>
                    <li>
                        <Link to="history">Our History</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default About;