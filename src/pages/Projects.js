import React from "react";
import Navbar from "../components/navbar";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Experience.css"




function CreateCard(title, subtitle, text, subtext) {
    return (
        <Dropdown>
            <Card className="card">
                <Card.Body className="card-body" aria-label="card body" >
                    <Card.Title className="title" aria-label="card title" aria-description={title}>{title}</Card.Title>
                    <Card.Subtitle className="subtitle" aria-label="card subtitle" aria-description={subtitle}>{subtitle}</Card.Subtitle>
                    <Card.Text className="text" aria-description={text}>
                        {text}
                    </Card.Text>
                    <Card.Text className="subtext" aria-description={subtext}>
                        {subtext}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Dropdown>
    );
}

function Projects() {
    return (
        <div>
            <Navbar />
            <p> Projects</p>
            <div className="experience-div">


                {CreateCard("Animinder", "Social Watch List Reminder",
                    "A social web app using React.tsx and Firebase that allows users to create a watchlist of their favorite shows. New show suggestions are generated based on popularity and genre of shows in friends watchlists. Login is handled using google authentication.", "*Done as a final project for CSCI0320")}
                {CreateCard("Search", "Closed Environment Search Engine", "Implemented a Page Rank alorithm using tf-idf relevance.", " *Done as a final project for CSCI0200")}
                {CreateCard("Decision Tree", "", "Used machine learning principles to generate and prune decision trees to classify spam and chess datasets.", "Done as a homework for CSCI1420")}
            </div>
        </div>
    );

}
export default Projects;