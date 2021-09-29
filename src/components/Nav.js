import React from "react";
import { Logo } from "./svg";
const liList = [
    { id: 1, title: "About Me" },
    { id: 2, title: "Services" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "Testimonials" },
    { id: 5, title: "Blog" },
    { id: 6, title: "Contact Us" },
];
const Nav = () => {
    return (
        <nav className="container">
            <div className="nav__wrapper ">
                <a href="#">
                    <Logo />
                </a>
                <div className="nav__wrapper__navbar">
                    <ul>
                        {liList.map(el => {
                            const { id, title } = el;
                            return (
                                <li key={id}>
                                    <a href={`#${title.toLocaleLowerCase().split(" ")[0]}`}>
                                        {title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <a href="#">
                        <button className="btn">Hire Me!</button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
