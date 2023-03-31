import React from 'react'
import SocialLinks from './Socials';
import Navbar from '../components/navbar';
import "../styles/Home.css";


export default function SelfIntro() {
    return (
        <div id='home' className='home-div' aria-label='Home'>
            {/* <Navbar /> */}
            <div className='name-intro' aria-label='Name Intro' aria-details='Animation saying "Hi, I am Junxiang"'>
                <>Hi, I'm Junxiang!</>

            </div>
        </div>

    );
}