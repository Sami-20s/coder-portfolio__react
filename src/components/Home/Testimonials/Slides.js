import React from "react";
import Slider from "infinite-react-carousel";
import SingleSlide from "./SingleSlide";

const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 400,
    arrows: false,
    className: "slider-settings",
    dots: true,
    appendDots: dots => <ul className="sami">{dots}</ul>,
};

const Slides = ({ list }) => {
    return (
        <>
            <Slider {...sliderSettings}>
                {list.map(item => {
                    return (
                        <div key={item.id}>
                            <SingleSlide {...item} />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default Slides;
