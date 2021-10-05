import React from "react";
import Buttons from "./Buttons";
import Images from "./Images";
import { BsArrowDown } from "react-icons/bs";
// BsArrowDown , BsArrowUp

const Header = ({ name, aboutName, cvUrl }) => {
    return (
        <header className="container">
            <div className="header__wrapper">
                <h1>{name}</h1>
                <p>{aboutName}</p>
                <Buttons cvUrl={cvUrl} />
            </div>
            <Images />
            <a href="#about" className="goToBottom">
                <BsArrowDown />
            </a>
        </header>
    );
};

export default Header;
