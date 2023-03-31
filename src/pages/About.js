import React from "react";
import { Image } from "react-bootstrap";
import "../styles/About.css";

// function CreateImage(src, alt, width, height) {
//     return (
//         <Image src={src} alt={alt} width={width} height={height} />
//     );
// }   

function About(){
    return(
    <div className="about">
        <h1> About Me </h1>
        <> I'm a sophomore studying Mathematics-Computer Science at Brown University. My interests lie in math education, machine learning, and human computer interaction.</>
        <> In my free time I am part of the </> <a href = "https://brownband.org/" target="_blank">Brown Band</a> <> and the club baseball team.</>
    </div>);
}

export default About;