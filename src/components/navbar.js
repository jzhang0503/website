import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
    return (
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={'/test'}>Test</Link></li>
        </ul>

    );
}

export default Navbar;
