(function(){
  'use strict';

  angular.module('MenuApp').component('categories',{
    controller: CategoriesController,
    controllerAs: '$ctrl',
    templateUrl: 'src/categories.template.html',
    bindings: {
      categories:"<"
    }
  })

  CategoriesController.$inject = ['MenuDataService']
  function CategoriesController(MenuDataService){
    var $ctrl = this;

  }

})();
