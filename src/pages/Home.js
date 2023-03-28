import React from 'react'
import SocialLinks from './Socials';
import Navbar from '../components/navbar';
import "../styles/Home.css";


export default function SelfIntro() {
    return (
        <div>
            <Navbar />
            <div className='name-intro'>
                <p>Hi, I'm Junxiang!</p>

            </div>
            <div className='study-intro'>
                <p>I'm a sophomore studying Mathematics-Computer Science at Brown University</p>
            </div>
            
        </div>

    );
}