'use strict';

import React, { Component } from 'react';
import store from './../../store';

import { removeWeatherFromList } from './../../actions/weather_list';

import Open_Weather_Search from './../../components/Open_Weather_Search/Open_Weather_Search';
import Weather_View from './../../components/dumb/Weather_View';
import Alert from './../../services/Alert';

export default class Home extends Component {
    constructor() {
        super();
    }

    /**
     * @param {Number} index
     * @param {Object} event
     */
    static removeWeather(index, event) {
        event && event.preventDefault();
        event && event.stopPropagation();

        store.dispatch(removeWeatherFromList(index));
    }

    render() {
        let alertStore = this.props.alert;
        let weatherStore = this.props.weather;
        let weatherListStore = this.props.weatherCities;

        return <div className="app-home">

            <h1>Home</h1>

            <Open_Weather_Search />

            <Weather_View weather={weatherStore} weatherList={weatherListStore.weatherList}
                          remove={Home.removeWeather} />

            <Alert alert={alertStore} />

        </div>
    }
}