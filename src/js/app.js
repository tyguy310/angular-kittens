// sample angular code

(function() {

  'use strict';

  angular
    .module('kittenApp', [
      'ngRoute',
      'kittenApp.config',
      'kittenApp.components.main',
      'kittenApp.components.new'
    ]);

})();
