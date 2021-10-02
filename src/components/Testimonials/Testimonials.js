import React from "react";
import Slides from "./Slides";
import sliderList from "./sliderList";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2>Testimonials</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <Slides list={sliderList} />
        </section>
    );
};

export default Testimonials;
