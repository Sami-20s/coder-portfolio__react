import React from "react";

const Navbar = ({ navList, children }) => {
    return (
        <>
            <div className="nav__wrapper__navbar">
                <ul>
                    {navList.map(({ id, title }) => {
                        return (
                            <li key={id}>
                                <a href={`#${title.toLocaleLowerCase().split(" ")[0]}`}>{title}</a>
                            </li>
                        );
                    })}
                </ul>
                {children}
            </div>
        </>
    );
};

export default Navbar;
