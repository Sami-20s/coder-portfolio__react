import React from "react";

const ImagesItem = ({ children, img }) => {
    return (
        <div className="portfolio__imgs__wrapper__item">
            <a href={img}>
                <img
                    src={img}
                    alt=""
                    className="portfolio__img__wrapper__item__img"
                    width="322px"
                />

                <div className="portfolio__imgs__wrapper__item__overlay">
                    <h4>Application Development</h4>
                    <h5>HTML, CSS, jQuery</h5>
                    <h6>
                        Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed
                        diam eirmod tempor dolore.
                    </h6>
                    {children}
                </div>
            </a>
        </div>
    );
};

export default ImagesItem;
