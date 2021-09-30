import React from "react";
import PointsItems from "./PointsItems";
import pointsList from "./pointsList";
const Points = () => {
    return (
        <>
            <section id="points">
                <div className="points__wrapper container">
                    {pointsList.map(item => (
                        <PointsItems {...item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Points;
