'use strict';

import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home/Home';
import About from './About/About';

function mapStateToProps(store, props) {
    return {
        alert: store.alert,
        weather: store.weather,
        weatherCities: store.weatherCities
    }
}

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className="app">

            <ul className="app-navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>


            <Route exact path="/" render={() => <Home {...this.props} /> } />
            <Route path="/about" render={() => <About {...this.props} /> } />
        </div>
    }
}

export default withRouter(connect(mapStateToProps)(App));
