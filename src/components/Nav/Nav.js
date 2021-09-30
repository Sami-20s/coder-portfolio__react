import React from "react";
import { Logo } from "../svg";
import Buttons from "./Buttons";
import Navbar from "./Navbar";
import navList from "./navList";
const Nav = () => {
    return (
        <nav className="container">
            <div className="nav__wrapper ">
                <a href="#">
                    <Logo />
                </a>
                <Navbar navList={navList}>
                    <Buttons />
                </Navbar>
            </div>
        </nav>
    );
};

export default Nav;
