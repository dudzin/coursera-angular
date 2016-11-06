(function(){
  'use strict' ;
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController )
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject =['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.found = [];

    ctrl.getMatchedMenuItems = function(searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function(response){
        ctrl.found = response
      })
      .catch(function (error) {
        console.log(error)
      })
    }

    ctrl.removeItem = function(index){
      ctrl.found.splice(index, 1)
    }


  }

  function MenuSearchService ($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then(function (result) {
        var foundItems = [];
        for(var index =0; index < result.data.menu_items.length; index ++)  {
          var item = result.data.menu_items[index];
          if(item.description.indexOf(searchTerm) !=-1){
            foundItems.push(item)
          }
        }
        return foundItems;
      });
    }
  };

  function FoundItemsDirective(){
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope:{
        foundItems: '<',
        onRemove: '&'
      },
      controller:FoundItemsDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: FoundItemsDirectiveLink
    }
    return ddo;
  }

  function FoundItemsDirectiveController(){
    var ctrl = this;

    ctrl.hasEmptyList = function(){

      if(ctrl.foundItems == undefined || ctrl.foundItems.length==0){
        return true;
      }
      return false;
    }
  }

  function FoundItemsDirectiveLink(scope, element, attrs, controller){
    scope.$watch('ctrl.hasEmptyList()', function(newValue, oldValue){

      if(newValue == true){
        var warningElem = element.find('div.error');
        warningElem.css('display', 'block');
      }else {
        var warningElem = element.find('div.error');
        warningElem.css('display', 'none');
      }
    })
  };

}
)()
