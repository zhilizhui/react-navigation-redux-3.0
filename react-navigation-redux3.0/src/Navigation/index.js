import React, { Component } from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import NavigationStack from "./navigationStack";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import Screen1 from "../Components/screen1";
import Screen2 from "../Components/screen2";
const middleware = createReactNavigationReduxMiddleware("root",state => state.NavigationReducer);
const App = reduxifyNavigator(NavigationStack, "root")
const mapStateToProps = state => {
  return {
    state: state.NavigationReducer
  };
};
export default connect(mapStateToProps)(App);
