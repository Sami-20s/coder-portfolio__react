/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Arrow, portfolioImgList, portfolioList } from "./portfolioList";
import Categories from "./Categories";
import Images from "./Images";
import Buttons from "./Buttons";
const Portfolio = () => {
    const [images, setImages] = useState(portfolioImgList);
    const categorieFilter = (e, catego) => {
        let portList = document.querySelectorAll(".portfolio__list");
        portList.forEach(ele => {
            ele.classList.remove("li-active");
        });
        e.target.classList.add("li-active");
        const newImages = portfolioImgList.filter(item => item.categorie === catego);
        if (catego === "All") {
            return setImages(portfolioImgList);
        }
        setImages(newImages);
    };
    return (
        <section id="portfolio" className="container">
            <h2>Our Portfolio</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <Categories portfolioList={portfolioList} categorieFilter={categorieFilter} />
            <Images images={images}>
                <Arrow />
            </Images>
            <Buttons />
        </section>
    );
};

export default Portfolio;
