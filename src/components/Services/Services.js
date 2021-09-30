import React from "react";
import Buttons from "./Buttons";
import { servicesList, Arrow } from "./servicesList";
import SkillsItmes from "./SkillsItmes";
const Services = () => {
    return (
        <section id="services" className="container">
            <h2>Our Services</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <SkillsItmes servicesList={servicesList}>
                <Arrow />
            </SkillsItmes>
            <Buttons />
        </section>
    );
};

export default Services;
