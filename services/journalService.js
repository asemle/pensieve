angular.module('pensieve')
.service("journalService", function() {
  this.getJournal = function() {
    return journal;
  }
});

var journal = [];
