import React from "react";
import skillsList from "./aboutList";
import Buttons from "./Buttons";
import Details from "./Details";
import Images from "./Images";

const About = () => {
    return (
        <section id="about" className="container">
            <Images />
            <Details skillsList={skillsList}>
                <Buttons />
            </Details>
        </section>
    );
};

export default About;
