import React from "react";
import "./style/style.scss";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";

function App() {
    return (
        <>
            <Nav />
            <Home />
            <Images />
        </>
    );
}

export default App;
