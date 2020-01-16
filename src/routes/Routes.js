import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home"
import Menu from "../pages/Menu"

export default function Routes(){
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/menu">
                        <Menu/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}