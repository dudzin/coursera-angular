(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);


MainItemsController.$inject = ['$stateParams','MenuDataService'];
function MainItemsController($stateParams,MenuDataService) {
  var $ctrl = this;
  MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(response){
    $ctrl.items =response;
  });
}

})();
