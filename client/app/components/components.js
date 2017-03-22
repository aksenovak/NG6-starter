import angular from 'angular';
import Home from './home/home';
import About from './about/about';
// import SomeRoute from './someRoute/someRoute';
//
// let Home = require('./home/home');
// let About = require('./about/about');


let componentModule = angular.module('app.components', [
  Home,
  About
])
.name;

export default componentModule;
