import React from "react";
import "./style/style.scss";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Points from "./components/Points/Points";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
    const name = "Mr. John Weary";
    const aboutName = "A Professional Web Developer and UI/UX Designer.";
    const cvUrl = "#";
    return (
        <>
            <Nav />
            <Header name={name} aboutName={aboutName} cvUrl={cvUrl} />
            <article>
                <About />
                <Services />
                <Points />
                <Portfolio />
            </article>
            <Testimonials />
        </>
    );
}

export default App;
