import React from "react";
import "./style/style.scss";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";

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
            </article>
        </>
    );
}

export default App;
