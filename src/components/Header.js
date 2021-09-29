import React from "react";

const Header = ({ name, aboutName, cvUrl }) => {
    return (
        <header className="container">
            <div className="header__wrapper">
                <h1>{name}</h1>
                <p>{aboutName}</p>
                <div className="buttons">
                    <a href={cvUrl}>
                        <button className="btn btn-first">Download CV</button>
                    </a>
                    <a href={cvUrl}>
                        <button className="btn btn-second">My Work</button>
                    </a>
                </div>
            </div>
            <div className="images">
                <img src="./img/man.png" alt="" className="man" />
                <img src="./img/header-shape.svg" alt="" className="shape" />
            </div>
        </header>
    );
};

export default Header;
