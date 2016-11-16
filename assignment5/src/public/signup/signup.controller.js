(function(){
  'use strict'

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', "UserService","ApiPath"]

  function SignupController(MenuService, UserService,ApiPath){
    var ctrl = this;

    ctrl.url = ApiPath
    ctrl.user = {};
    ctrl.dishError = null;
    ctrl.userAdded = false;

    ctrl.submit= function(){
      ctrl.dishError = null;
      ctrl.userAdded = false;
      var promise = MenuService.getItem(ctrl.user.dish)
      promise.then(function (response) {
        console.log(response)
        ctrl.user.item = response.data;
        UserService.addUser(ctrl.user)
        ctrl.userAdded = true;
        }
      )
      .catch(function (errorResponse) {
        console.log("error")
        ctrl.dishError = "No such menu number exists"
        ctrl.userAdded = false;
      }
    );


  }
  }


})();
