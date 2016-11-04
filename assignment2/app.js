(function(){
  'use strict' ;
  angular.module('ShoppingListCheckOff',[])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);

  function ShoppingListCheckOffService(){
    var service = this;

    service.toBuyList = [{ name: "cookies", quantity: 10 },
                         { name: "cookies", quantity: 20 },
                         { name: "cookies", quantity: 30 },
                         { name: "cookies", quantity: 40 },
                         { name: "cookies", quantity: 50 }]
    service.boughtList = []

    service.buy = function(index){
      if((index === undefined )){

      }else {
        var item = service.toBuyList[index]
        service.toBuyList.splice(index,1)
        service.boughtList.push(item)
      }
    }

    service.getToBuyList = function(){
      return service.toBuyList
    }
    service.getBoughtList = function(){
      return service.boughtList
    }
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService){
     var toBuyCtrl = this;

     toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
     toBuyCtrl.buy = function(index){
       ShoppingListCheckOffService.buy(index);
     }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

}
)();
