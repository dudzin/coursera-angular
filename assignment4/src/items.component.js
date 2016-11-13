(function(){
  'use strict';

  angular.module('MenuApp').component('items',{
    controller: ItemsController,
    controllerAs: '$ctrl',
    templateUrl: 'src/items.template.html',
    bindings: {
      items:"<"
    }
  })

  ItemsController.$inject = ['MenuDataService'];
  function ItemsController(MenuDataService){
    var $ctrl = this;
  }
})();
