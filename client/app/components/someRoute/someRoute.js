import angular from 'angular';
import uiRouter from 'angular-ui-router';
import someRouteComponent from './someRoute.component';

let someRouteModule = angular.module('someRoute', [
  uiRouter
])

  // .config(($stateProvider) => {
  //   "ngInject";
  //   $stateProvider
  //     .state('some-route', {
  //       url: '/some-route',
  //       component: 'someRoute'
  //     });
  // })

  .component('someRoute', someRouteComponent)

  .name;

export default someRouteModule;
