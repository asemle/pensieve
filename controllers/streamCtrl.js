angular.module('pensieve')
.controller('streamCtrl', function($scope, $state, $timeout,audioService) {
  audioService.stopCrickets();
  var textBox = false;
  $timeout(function () {
    textBox = true;
  }, 3000);

  $('textarea').keydown(function() {

})
