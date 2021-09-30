import React from "react";

const SkillsItmes = ({ children, servicesList }) => {
    return (
        <div className="skills__wrapper">
            {servicesList.map(el => {
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
                        {children}
                    </a>
                );
            })}
        </div>
    );
};

export default SkillsItmes;
