(function(){
  'use strict'

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', "UserService","ApiPath"]

  function MyInfoController(MenuService, UserService,ApiPath){
    var ctrl = this;

    ctrl.url = ApiPath
    ctrl.user = {}

    var getUser = function(){
      ctrl.user = UserService.getUser()
    }
    getUser();
    console.log(ctrl.user)

    this.$onInit = function() {
        getUser();
    };
  }

})();
