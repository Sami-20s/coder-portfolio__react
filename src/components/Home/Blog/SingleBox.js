import React from "react";
import { Arrow } from "./blogList";
const SingleBox = ({ date, text, img }) => {
    return (
        <div className="blog__boxes__box">
            <img src={img} alt="blog-img" />
            <div className="blog__boxes__box__text">
                <h4>{date}</h4>
                <h3>{text}</h3>
                <div className="blog__boxes__box__text__btn">
                    <h6>Learn More</h6>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default SingleBox;
