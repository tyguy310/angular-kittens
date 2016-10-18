(function() {

  'use strict';

  angular
    .module('kittenApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
