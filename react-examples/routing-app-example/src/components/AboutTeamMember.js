import React from "react";
import { useParams , useNavigate } from "react-router-dom";

const AboutTeamMember = () => {

    // Extract the id from URL

    const { id } = useParams();
    const navigate = useNavigate();

    // data of team members

    const teamMembers = {
        1: {name: 'Dhruv',role: 'Software Engineer',dept : 'IT'},
        2: {name: 'Pooja',role: 'Project Manager',dept : 'IT'},
        3: {name: 'Sagar',role: 'Front End Designer',dept : 'IT'}
    }

    // find the team member by id

    const member = teamMembers[id];

    if(!member){
        return <p> No Such Team Member found.</p>;
    }

    // Function to navigate to another team member
    // 1-2-3-1

    const navigateNextTeamMember = () =>{
        const nextID = (parseInt(id) % 3) + 1; // Call next member id
        navigate('/about/team/${nextId}');
    }

    // Function to navigate back to team list

    const navigateToTeamList = () =>{
        navigate('/about/team');
    }

    return(
        <div>
            <h2>{member.name}</h2>
            <h3>Role : {member.role}</h3>
            <h3>Dept : {member.dept}</h3>

            {/* Button for Next Member */}

            <button onClick={navigateNextTeamMember}>Next Team Member</button>

            {/* Button for Back to List */}

            <button onClick={navigateToTeamList}>Back To Team</button>
        </div>
    )
};

export default AboutTeamMember;