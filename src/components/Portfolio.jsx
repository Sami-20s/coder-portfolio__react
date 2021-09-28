/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Arrow } from "./svg";

const portfolioList = [
    { id: 1, title: "ALL", active: "li-active" },
    { id: 2, title: "Web development", active: "" },
    { id: 3, title: "HTML", active: "" },
    { id: 4, title: "UI/UX", active: "" },
    { id: 5, title: "Web Design", active: "" },
];
const portfolioImgList = [
    { id: 1, img: "./img/portfolio-1.png" },
    { id: 2, img: "./img/portfolio-2.png" },
    { id: 3, img: "./img/portfolio-3.png" },
    { id: 4, img: "./img/portfolio-4.png" },
    { id: 5, img: "./img/portfolio-5.png" },
    { id: 6, img: "./img/portfolio-6.png" },
];

const Portfolio = () => {
    const [list, setList] = useState("ALL");
    const [buttonActive, setButtonActive] = useState(false);
    const viewAllActive = () => {
        setButtonActive(!buttonActive);
        document.body.style.overflowY = "hidden";
        document.querySelector(".portfolio__imgs__wrapper").classList.add("open");
    };
    const xClick = () => {
        setButtonActive(!buttonActive);
        document.body.style.overflowY = "scroll";
        document.querySelector(".portfolio__imgs__wrapper").classList.remove("open");
    };

    const handleClick = e => {
        if (e.target.id == "ALL") {
            setList("ALL");
        } else if (e.target.id == "Web_development") {
            setList("Web_development");
        } else if (e.target.id == "HTML") {
            setList("HTML");
        } else if (e.target.id == "UI/UX") {
            setList("UI/UX");
        } else if (e.target.id == "Web_Design") {
            setList("Web_Design");
        }
        // e.target.classList
        let portList = document.querySelectorAll(".portfolio__list");
        portList.forEach(ele => {
            ele.classList.remove("li-active");
        });
        e.target.classList.add("li-active");
    };
    return (
        <section id="portfolio" className="container">
            <h2>Our Portfolio</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <ul>
                {portfolioList.map(element => {
                    const { id, title, active } = element;
                    return (
                        <li
                            key={id}
                            onClick={handleClick}
                            id={title.split(" ").join("_")}
                            className={`portfolio__list ${active}`}
                        >
                            {title}
                        </li>
                    );
                })}
            </ul>
            <div className="portfolio__imgs__wrapper">
                {buttonActive && <div className="xClose" onClick={xClick}></div>}
                {list === "ALL" &&
                    portfolioImgList.map(el => {
                        const { id, img } = el;
                        return (
                            <div key={id} className="portfolio__imgs__wrapper__item">
                                <img
                                    src={img}
                                    alt=""
                                    className="portfolio__img__wrapper__item__img"
                                    width="322px"
                                />
                                <div className="portfolio__imgs__wrapper__item__overlay">
                                    <h4>Application Development</h4>
                                    <h5>HTML, CSS, jQuery</h5>
                                    <h6>
                                        Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor
                                        sit amet. sed diam eirmod tempor dolore.
                                    </h6>
                                    <Arrow />
                                </div>
                            </div>
                        );
                    })}
            </div>
            {/* This Is Only For Real Portfolio */}
            {/* {list === "ALL" && <h1>ALL</h1>}
            {list === "Web_development" && <h1>Web_development</h1>}
            {list === "HTML" && <h1>HTML</h1>}
            {list === "UI/UX" && <h1>UI/UX</h1>}
            {list === "Web_Design" && <h1>Web_Design</h1>}
            <button className="btn">View All</button> */}
            <button className="btn" onClick={viewAllActive}>
                View All
            </button>
        </section>
    );
};

export default Portfolio;
