import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <Project
                image="./images/BingeBuds.png"
                title="BingeBuds"
                text="MongoDB, Heroku & React."
                websiteLink="https://bingebuds-1caffd284cb2.herokuapp.com/"
                githubLink="https://github.com/Carolinapalacios95/Binge-Buds"
            />
            <Project
                image="./images/Spoiled-Watermelons.png"
                title="Spoiled Watermelons"
                text="Handlebars, SQL & Heroku"
                websiteLink="https://spoiled-watermelons.herokuapp.com/"
                githubLink="https://github.com/Carolinapalacios95/Spoiled-Watermelons"
            />
            <Project
                image="./images/Weather-Dashboard.png"
                title="Weather Dashboard"
                text="OpenWeather API & Bootstrap"
                websiteLink="https://carolinapalacios95.github.io/Weather-Dashboard/"
                githubLink="https://github.com/Carolinapalacios95/Weather-Dashboard"
            />
            <Project
                image="./images/Note-Taker.png"
                title="Note Taker"
                text="Express, OOP & Heroku"
                websiteLink="https://caros-note-taker.herokuapp.com/"
                githubLink="https://github.com/Carolinapalacios95/Note-Taker"
            />
            <Project
                image="./images/Note-Taker.png"
                title="Note Taker"
                text="Express, OOP & Heroku"
                websiteLink="https://caros-note-taker.herokuapp.com/"
                githubLink="https://github.com/Carolinapalacios95/Note-Taker"
            />
            <Project
                image="./images/Tech-Blog.png"
                title="Tech-Blog"
                text="MySQL, Express & Handlebars"
                websiteLink="https://caros-tech-blog-5b902c01d0b5.herokuapp.com/"
                githubLink="https://github.com/Carolinapalacios95/MVC-Tech-Blog"
            />
            <Project
                image="./images/Traveler-Dashboard.png"
                title="Traveler-Dashboard"
                text="OpenMeteo, Teleport API & Bulma"
                websiteLink="https://kritishrestha.github.io/Traveler-Dashboard/"
                githubLink="https://github.com/KritiShrestha/Traveler-Dashboard"
            />
        </div>
    );
}