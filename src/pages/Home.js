import React from 'react'
import '../styles/Home.css'
import SocialLinks from '../components/Socials';
import Navbar from '../components/navbar';

export default function SelfIntro() {
    return (
        <div className='home'>
            <Navbar/>
            <div className='name-intro'>
                Hi! I'm Junxiang
                <div className='study-intro'>
                    I'm a sophomore studying Mathematics-Computer Sciece at Brown University
                </div>
            </div>
        <SocialLinks/>
        </div>

    );
}