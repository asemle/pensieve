angular.module('pensieve')
.controller('breatheCtrl', function($scope, $state, $timeout) {
  $scope.showText = true;

$timeout(function() {
  $scope.showText = false
}, 5000)

$timeout(function () {
  $state.go('anapana');
}, 60000);


})
