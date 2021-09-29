import React from "react";
const paragraph =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.";
const skillsList = [
    { id: 1, title: "WORDPRESS 100%" },
    { id: 2, title: "HTML 75%" },
    { id: 3, title: "PHP 85%" },
    { id: 4, title: "CSS 95%" },
];

const About = () => {
    return (
        <section id="about" className="container">
            <div className="about__img">
                <div className="about__img__ex">
                    <span>06</span>
                    <span>Years of</span>
                    <span>Experience</span>
                </div>
                <img src="./img/about-img.png" alt="" />
            </div>
            <div className="about__details">
                <h2>Read About My Life Struggle Story!</h2>
                <p>{paragraph}</p>
                <ul>
                    {skillsList.map(el => {
                        const { id, title } = el;
                        return <li key={id}>{title}</li>;
                    })}
                </ul>
                <div className="about__details__buttons">
                    <a href="#">
                        <button className="btn-first">Hire Me!</button>
                    </a>
                    <a href="#">
                        <button className="btn-second">About Me</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
