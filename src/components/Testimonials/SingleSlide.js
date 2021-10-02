import React from "react";

const SingleSlide = ({ title, subTitle, text, img }) => {
    return (
        <div className="testimonials__slides">
            <img src={img} alt={title} />
            <div className="testimonials__slides__item">
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SingleSlide;
