import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Services from "./Services/Services";
import Points from "./Points/Points";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import HireMe from "./HireMe/HireMe";
import Blog from "./Blog/Blog";
import ContactUs from "./ContactUs/ContactUs";

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
        </>
    );
};

export default Home;
