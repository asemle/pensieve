angular.module('pensieve')
.controller('archiveCtrl', function ($scope, $state, audioService, journalService) {
audioService.playCrickets();
  $scope.records = journalService.getJournal();
})
