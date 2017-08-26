'use strict';
/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.}
 * Los modulos se cargan de manera automatica
 */
angular
  .module('app', [
    'ui.bootstrap',
    'ui.router',
    'oc.lazyLoad',
  ]);