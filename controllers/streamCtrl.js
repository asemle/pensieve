angular.module('pensieve')
.controller('streamCtrl', function($scope, $state, $timeout,audioService) {
  audioService.stopCrickets();
  $scope.textBox = false;
  $timeout(function () {
    $scope.textBox = true;
  }, 4000);

var timer;
var count = 0
var encouragements = ['just keep typing!',"whatever comes to mind...", 'anything at all.', 'go on...', 'get it all out'];

$scope.msgTimer = function() {
  if(timer) {
  $timeout.cancel(timer);
 $scope.selectedMsg = undefined;
}
  timer = $timeout(function () {

  $scope.selectedMsg = encouragements[count];
  console.log($scope.selectedMsg)
    if(count === encouragements.length - 1) {
      count = 0
    }
    else {
      count++;
    }
  }, 3000);
}


var displayEncouragement = function() {
  for(var i = 0; i < $scope.encouragments.length; i++) {
    return $scope.encouragements[i];
  }
}


})
