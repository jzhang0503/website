import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
    return (

        <div className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href={'#projects'}>Projects</a></li>
                 <li><a href={'#socials'}>Socials</a></li>
                <li><a href="https://drive.google.com/file/d/11VohdFyQ3KHoaRr8mNbYHx6YD2jMxtDx/view?usp=share_link"
                    target="_blank">
                    Resume
                </a></li>
            </ul>
        </div>


    );
}

export default Navbar;
