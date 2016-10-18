(function() {

  'use strict';

  angular
    .module('kittenApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
     .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
     .when('/new', {
      templateUrl: 'js/components/new/new.view.html',
      controller: 'newController',
      controllerAs: 'newCtrl'
    })
    .otherwise('/');
  }

})();
