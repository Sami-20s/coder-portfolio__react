import React, { useState } from "react";
import { servicesList, Arrow, extraServicesList } from "./svg";

const Services = () => {
    const [service, setService] = useState(true);
    const viewAll = () => {
        let skillsWrapper = document.querySelector(".skills__wrapper");
        skillsWrapper.classList.toggle("open");
        setService(!service);
    };
    return (
        <section id="services" className="container">
            <h2>Our Services</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <div className="skills__wrapper">
                {service &&
                    servicesList.map(el => {
                        const { id, title, svg } = el;
                        return (
                            <a
                                href={`https://en.m.wikipedia.org/wiki/${title
                                    .toLowerCase()
                                    .split(" ")
                                    .join("_")}`}
                                className="skills__wrapper__item"
                                key={id}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="skills__wrapper__item__circle">{svg}</div>
                                <h4>{title}</h4>
                                <Arrow />
                            </a>
                        );
                    })}
                {!service && (
                    <>
                        {extraServicesList.map(el => {
                            const { id, title, svg } = el;
                            return (
                                <a
                                    href={`https://en.m.wikipedia.org/wiki/${title
                                        .toLowerCase()
                                        .split(" ")
                                        .join("_")}`}
                                    className="skills__wrapper__item"
                                    key={id}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="skills__wrapper__item__circle">{svg}</div>
                                    <h4>{title}</h4>
                                    <Arrow />
                                </a>
                            );
                        })}
                        <button className="btn open" onClick={viewAll}>
                            View Less
                        </button>
                    </>
                )}
            </div>
            <button className="btn" onClick={viewAll}>
                View All
            </button>
        </section>
    );
};

export default Services;
