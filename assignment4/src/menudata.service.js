(function(){
  'use strict';

angular.module('data').service('MenuDataService', MenuDataService);

MenuDataService.$inject =['$http']
function MenuDataService($http){
  var self = this;
  self.categories = []
  self.items =[]

  self.getAllCategories = function(){
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
      .then(function(response){
        return response.data;
      })
      return promise;
  }

  self.getItemsForCategory = function(categoryShortName){
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName,
    }).then(function(response){
        self.items = response.data
        return self.items;
    })
  }

}

})();
