import React from "react";
import { Link } from "react-router-dom";

const AboutOurTeam =()=>{
    return(
        <div>
            <h2>Our Team</h2>
            <p>Details about our Team</p>
            <p>Meet our Team Members</p>
            <ul>
                <li>
                    <link to="/about/team/1">Team Member 1</link>
                </li>
                <li>
                    <link to="/about/team/2">Team Member 2</link>
                </li>
                <li>
                    <link to="/about/team/2">Team Member 3</link>
                </li>
            </ul>
        </div>
    )
}

export default AboutOurTeam;