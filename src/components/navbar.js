import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
    return (
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><a href="https://drive.google.com/file/d/11VohdFyQ3KHoaRr8mNbYHx6YD2jMxtDx/view?usp=share_link"
                target="_blank">
                Resume
            </a></li>
            <li><Link to={'/socials'}>Socials</Link></li>
        </ul>

    );
}

export default Navbar;
