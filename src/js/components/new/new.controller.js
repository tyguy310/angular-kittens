(function() {

  'use strict';

  angular
    .module('kittenApp.components.new', [])
    .controller('newController', newController);

  newController.$inject = ['$scope'];

  function newController($scope) {
    /*jshint validthis: true */
    console.log('New Kitten!');
  }

})();
