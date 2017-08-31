'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .run(
    [           '$rootScope', '$state', '$stateParams',
      function ( $rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ( $stateProvider,   $urlRouterProvider) 
      {
        var layout = 'views/layout.html';
        var aside  = 'views/aside.html';
        var content= 'views/content.html';
        
        $urlRouterProvider
          .otherwise('/app/home');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: layout
              },
              'aside': {
                templateUrl: aside
              },
              'content': {
                templateUrl: content
              }
            }
          })
          .state('app.home', {
            url: '/home',
            templateUrl: 'views/home.html', // que pagina debe mostrarse y se muestra en el contet, remplaza o agrega a la vista
            resolve: {
              load: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'styles/flexslider.css',
                    'libs/jquery/jquery.flexslider.js',
                    'controllers/home.js'
                    ]
                  });
                }
              }
          })
          .state('app.producto',{
            url: '/producto',
            templateUrl: 'views/producto/index.html',
            resolve: {
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'factories/producto.js',
                    'controllers/producto/index.js'
                  ]
                });
              }
            }
          })
          .state('app.crearProducto',{
            url: '/producto/nuevo',
            templateUrl: 'views/producto/create.html',
            resolve: {
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'controllers/producto/create.js'
                  ]
                });
              }
            }
          })
          .state('app.editarProducto',{
            url: '/producto/{id:[0-9]{1,4}}',
            templateUrl: 'views/producto/editar.html',
            resolve: {
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'factories/producto.js',
                    'controllers/producto/edit.js'
                  ]
                });
              }
            }
          })
          .state('app.solicitudRetiro',{
            url: '/solicitud',
            templateUrl: 'views/carta/index.html',
            resolve: { // estoy analizando esto
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'models/carta/data.js',
                    'controllers/carta/index.js'
                  ]
                });

              }
            }
          })
          
          .state('app.cartaDetalle',{
            url: '/carta/{id:[0-9]{1,4}}',
            templateUrl: 'views/carta/detalle.html',
            resolve: { // cargo lo que necesito, no todo, carga factory, controladores, necesarios para la vista
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'models/carta/data.js',
                    'controllers/carta/detalle.js'
                  ]
                });

              }
            }
          })
          
          .state('app.combo',{
            url: '/combo',
            templateUrl: 'views/combo/index.html',
            resolve: { // cargo lo que necesito, no todo, carga factory, controladores, necesarios para la vista
              load: function($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: "app",
                  files: [
                    'models/combo/data.js',
                    'controllers/combo/index.js'
                  ]
                });

              }
            }
          });

      }
    ]
  );