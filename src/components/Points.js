import React from "react";
const pointsList = [
    { id: 1, number: "50+", title: "Clients" },
    { id: 2, number: "68", title: "Projects" },
    { id: 3, number: "30", title: "Awards" },
    { id: 4, number: "06", title: "Years Experience" },
];
const Points = () => {
    return (
        <>
            <section id="points">
                <div className="points__wrapper container">
                    {pointsList.map(el => {
                        const { id, number, title } = el;
                        return (
                            <div className="points__wrapper__item" key={id}>
                                <h4>{number}</h4>
                                <p>{title}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Points;
