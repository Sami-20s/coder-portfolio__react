import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/style.scss";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Error from "./components/Error/Error";

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/images">
                        <Images />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
