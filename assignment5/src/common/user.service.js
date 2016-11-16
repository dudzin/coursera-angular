(function(){
  "use strict";

  angular.module("common").service("UserService", function(){
    var service = this;
    var user;

    service.addUser = function(_user_){
      user = _user_;
    }

    service.getUser = function(){
      return user;
    }

  })
})();
