import React from "react";
import ImagesItem from "./ImagesItem";

const Images = ({ images, children }) => {
    return (
        <div className="portfolio__imgs__wrapper">
            {images.map(item => {
                return (
                    <ImagesItem key={item.id} {...item}>
                        {children}
                    </ImagesItem>
                );
            })}
        </div>
    );
};

export default Images;
