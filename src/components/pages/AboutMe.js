import React from "react";

const image = {
    marginBottom: "25px",
  }

const center = {
    textAlign: "center",
    }

export default function AboutMe() {
    return (
        <div style={center}>
            <h1>About Me</h1>
            <a href="https://github.com/Carolinapalacios95/">
                <img src="https://contrib.rocks/image?repo=Carolinapalacios95/portfolio" alt="Caro's Github Profile Image" height={100} width={100} style={image} />
            </a>
            <p>
               I am a recent graduate of the University of North Carolina at Chapel Hill's Full Stack Web Development Bootcamp. I am excited to learn new skills and apply them to my future career. My github profile is linked aboveby clicking on my profile picture.
            </p>
        </div>
    );
}