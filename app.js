angular.module('pensieve',["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state("inbox", {
    url: "/",
    templateUrl: "./src/templates/inbox.html",
    controller: "inboxCtrl"

  })
  .state('draft', {
    url: "/draft/:email",
    templateUrl: "./src/templates/draft.html",
    controller: "draftCtrl"

  })
  .state('contacts', {
    url: "/contacts",
    templateUrl: "./src/templates/contacts.html",
    controller: "contactsCtrl"
  });

})
