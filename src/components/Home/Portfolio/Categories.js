import React from "react";

const Categories = ({ portfolioList, handleClick, categorieFilter, colorChange }) => {
    return (
        <ul>
            <li className="portfolio__list li-active" onClick={e => categorieFilter(e, "All")}>
                All
            </li>
            <li className="portfolio__list " onClick={e => categorieFilter(e, "Web development")}>
                Web development
            </li>
            <li className="portfolio__list" onClick={e => categorieFilter(e, "HTML")}>
                HTML
            </li>
            <li className="portfolio__list" onClick={e => categorieFilter(e, "UI/UX")}>
                UI/UX
            </li>
            <li className="portfolio__list" onClick={e => categorieFilter(e, "Web Design")}>
                Web Design
            </li>
        </ul>
    );
};

export default Categories;
