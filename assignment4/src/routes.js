(function () {
'use strict'

  angular.module('MenuApp').config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider, data) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home',{
      url: '/',
      templateUrl: 'src/home.template.html'}
    );

    $stateProvider
     .state('categories', {
       url: '/categories',
       templateUrl: 'src/main-categories.template.html',
       controller: 'MainCategoriesController as $ctrl',
       resolve: {
         categories: ['MenuDataService', function(MenuDataService){
           return MenuDataService.getAllCategories();
         }]
       }
     })

    .state('categories.items', {
      url:'/items/{categoryShortName}',
      templateUrl: "src/main-items.template.html",
      controller: "MainItemsController as $ctrl"
    })
  }


})();
