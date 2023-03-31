import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Experience.css"

function CreateCard(title, subtitle, text, subtext) {
    return (
        <div className="entire-card">
            <Card className="card">
                <Card.Body className="card-body" aria-label="card body" >
                    <Card.Title className="title" aria-label="card title" aria-details={title}>{title}</Card.Title>
                    <Card.Subtitle className="subtitle" aria-label="card subtitle" aria-details={subtitle}>{subtitle}</Card.Subtitle>
                    <Card.Text className="text" aria-details={text}>
                        {text}
                    </Card.Text>
                    <Card.Text className="subtext" aria-details={subtext}>
                        {subtext}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
}

function Projects() {
    return (
        <div id="projects" className="projects-div" aria-label="Projects" aria-details="Listed below are some of my projects">
            <div className="title-text"> Projects</div>
            <div className="experience-div">
                {CreateCard("Animinder", "Social Watch List Reminder",
                    "A social web app using React.tsx and Firebase that allows users to create a watchlist of their favorite shows and get new show suggestions are generated based on popularity and genre of shows in their friends' watchlists.", "*Done as a final project for CSCI0320")}
                {CreateCard("Search", "Closed Environment Search Engine", "Implemented the Page Rank algorithm using tf-idf relevance to seach through xml files.", " *Done as a final project for CSCI0200")}
                {CreateCard("Decision Tree", "", "Used machine learning to classify spam and chess datasets by generating and pruning decision trees.", "*Done as a homework for CSCI1420")}
                {CreateCard("Credit Predictor", "", "Used machine learning and minimum likelihood estimation to predict the quality of a person's credit using the German-Credit datset.", "*Done as a homework for CSCI1420")}
            </div>
        </div>
    );

}
export default Projects;