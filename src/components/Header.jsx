import React from "react";

const Header = () => {
    return (
        <header className="container">
            <div className="header__wrapper">
                <h1>Mr. John Weary</h1>
                <p>A Professional Web Developer and UI/UX Designer.</p>
                <div className="buttons">
                    <a href="#">
                        <button className="btn btn-first">Download CV</button>
                    </a>
                    <a href="#">
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
