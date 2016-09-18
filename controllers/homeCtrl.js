angular.module('pensieve')
.controller('homeCtrl', function($scope, audioService) {
audioService.playCrickets();
})
