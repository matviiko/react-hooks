import React from 'react';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./contex/alert/alertState";
import {GithubState} from "./contex/github/githubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Switch>
                            <Route path={"/"} exact component={Home}/>
                            <Route path={"/about"} component={About}/>
                            <Route path={"/profile/:name"} component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
