angular.module('pensieve')
.controller('streamCtrl', function($scope, $state, $timeout,audioService) {
  audioService.stopCrickets();
  $scope.textBox = false;
  $timeout(function () {
    $scope.textBox = true;
  }, 4000);

var timer;
var count = 0
var encouragements = ['just keep typing',"whatever comes to mind", 'anything at all', 'go on...', 'get it all out'];

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
  $scope.journal = []

$timeout( function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var ssss = today.getSeconds();


  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }


  today = mm+'/'+dd+'/'+yyyy+ ' ' + ssss

localStorage.setItem(today, $scope.newEntry)
console.log(localStorage.getItem(today))
audioService.playGong();
$scope.streamed = true;
}, 300000)

});
