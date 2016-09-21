angular.module('pensieve')
.controller('archiveCtrl', function ($scope, $state, audioService) {
audioService.playCrickets();
  $scope.journal = localStorage;
  console.log(localStorage);
  $scope.clearEntry = function(index) {
    localStorage.removeItem(index)
  }
})
