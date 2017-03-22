import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  ocLazyLoad,
  Common,
  Components
])
  .config(($locationProvider, $stateProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    // $stateProvider.state('some-route', {
    //   url: '/some-route',
    //   templateProvider: ['$q', function ($q) {
    //     let deferred = $q.defer();
    //     require.ensure(['./components/someRoute/someRoute.html'], function () {
    //       let template = require('./components/someRoute/someRoute.html');
    //       deferred.resolve(template);
    //     });
    //     return deferred.promise;
    //   }],
    //   controller: 'someRouteController',
    //   controllerAs: 'someRoute',
    //   resolve: {
    //     someRoute: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
    //       let deferred = $q.defer();
    //       require.ensure([], function () {
    //         let module = require('./components/someRoute/someRoute.js')(angular);
    //         $ocLazyLoad.load({
    //           name: 'app'
    //         });
    //         deferred.resolve(module);
    //       });
    //
    //       return deferred.promise;
    //     }]
    //   }
    // });
  })

  .component('app', AppComponent);
