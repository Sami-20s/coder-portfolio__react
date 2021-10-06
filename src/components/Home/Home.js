import React, { useState } from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Services from "./Services/Services";
import Points from "./Points/Points";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import HireMe from "./HireMe/HireMe";
import Blog from "./Blog/Blog";
import ContactUs from "./ContactUs/ContactUs";
import { BsArrowUp } from "react-icons/bs";
const Home = () => {
    const name = "Mr. John Weary";
    const aboutName = "A Professional Web Developer and UI/UX Designer.";
    const cvUrl = "#";
    return (
        <>
            <Header name={name} aboutName={aboutName} cvUrl={cvUrl} />
            <About />
            <Services />
            <Points />
            <Portfolio />
            <Testimonials />
            <HireMe />
            <Blog />
            <ContactUs />
            <GoToTop />
        </>
    );
};
const GoToTop = () => {
    const [button, setButton] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 700) {
            setButton(true);
        } else {
            setButton(false);
        }
    });
    const goToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <button className={`${button ? "btn-toTop btn-active" : "btn-toTop"}`} onClick={goToTop}>
            <BsArrowUp />
        </button>
    );
};
export default Home;
