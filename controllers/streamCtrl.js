angular.module('pensieve')
.controller('streamCtrl', function($scope, $state, $timeout,audioService) {
  audioService.stopCrickets();
  $scope.textBox = false;
  $timeout(function () {
    $scope.textBox = true;
  }, 4000);

var timer;
var count = 0
var encouragements = ['keep typing!',"type whatever comes to mind", 'this is private - for your eyes only', 'keep typing, no matter what'];
$scope.msgTimer = function() {
  if(timer) {
  clearTimeout(timer);
  $scope.selectedMsg = undefined;
}
  timer = setTimeout(function () {
    $scope.selectedMsg = encouragements[count];
    console.log($scope.selectedMsg)
    if(count === encouragements.length) {
      count = 0
    }
    else {
      count++;
    }
  }, 3000);
}
console.log($scope.selectedMsg);

var displayEncouragement = function() {
  for(var i = 0; i < $scope.encouragments.length; i++) {
    return $scope.encouragements[i];
  }
}


})
