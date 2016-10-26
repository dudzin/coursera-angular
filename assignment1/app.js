(function (){
  'use strict';
  angular.module("LunchCheck",[])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunchMenu = ""
  $scope.message = ""
  $scope.color = {color: 'red'}
  $scope.borderColor = {borderColor: 'red'}

  $scope.checkLunch = function(){

    if($scope.lunchMenu == ''){
        $scope.message = "Please enter data first"
        $scope.color.color= 'red'
        $scope.borderColor.borderColor= 'red'
    }else {
      var array = $scope.lunchMenu.split(',');
      if(countLunch()<=3){
          $scope.message = "Enjoy"
      }else {
          $scope.message = "Too much!"
      }
      $scope.color.color= 'green'
      $scope.borderColor.borderColor= 'green'
    }


  }

  var countLunch = function(){
    var array = $scope.lunchMenu.split(',');
    var count = 0;
    for(var index in array){
      if(array[index].trim() != ''){
        count++;
      }
    }
    return count;
  }
};



})()
