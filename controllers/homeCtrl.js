angular.module('pensieve')
.controller('homeCtrl', function($scope) {
  $scope.crickets = new Audio("media/333221__hdfreema__night-crickets-back-porch.mp3")
  $scope.crickets.loop=true;
  $scope.crickets.play()
})
