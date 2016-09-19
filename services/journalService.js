angular.module('pensieve')
.service("journalService", function() {
  this.journal = [];
  this.getJournal = function() {
    return this.journal;
  }
  this.writeEntry = function(entry) {
    this.journal.push(entry)
  }
});
