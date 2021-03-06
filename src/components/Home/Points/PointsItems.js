import React from "react";

const PointsItems = ({ id, number, title }) => {
    return (
        <div className="points__wrapper__item">
            <h4>{number}</h4>
            <p>{title}</p>
        </div>
    );
};

export default PointsItems;
