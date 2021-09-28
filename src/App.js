import React from "react";
import "./style/style.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Points from "./components/Points";
import Portfolio from "./components/Portfolio";

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
        </>
    );
}

export default App;
