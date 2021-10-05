import React from "react";
import { Logo } from "../svg";
import Buttons from "./Buttons";
import Navbar from "./Navbar";
import navList from "./navList";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="container">
            <div className="nav__wrapper ">
                <Link to="/">
                    <Logo />
                </Link>
                <Navbar navList={navList}>
                    <Buttons />
                </Navbar>
            </div>
        </nav>
    );
};

export default Nav;
