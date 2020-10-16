import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Cart from './components/Cart';
import Login from "./Login";
import Register from './Register';

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={"/register"}>
                    <Register/>
                </Route>
                <Route path={"/login"}>
                    <Login/>
                </Route>
                <Route path={"/cart"}>
                    <Cart/>
                </Route>
                <Route path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
