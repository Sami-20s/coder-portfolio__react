import React from "react";
import { imagesList } from "./ImagesList";
import SingleImage from "./SingleImage";

const Images = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article id="images" className="container images__wrapper">
            <h2>
                <span>/</span>MY WORK
            </h2>
            <div className="images__wrapper__imgs">
                {imagesList.map(item => {
                    return <SingleImage key={item.id} {...item} />;
                })}
            </div>
            <button className="goToTop"></button>
        </article>
    );
};

export default Images;
