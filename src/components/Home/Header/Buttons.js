import React from "react";

const HeaderButtons = ({ cvUrl }) => {
    return (
        <div className="buttons">
            <a href={cvUrl}>
                <button className="btn btn-first">Download CV</button>
            </a>
            <a href={cvUrl}>
                <button className="btn btn-second">My Work</button>
            </a>
        </div>
    );
};

export default HeaderButtons;
