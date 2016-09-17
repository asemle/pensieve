angular.module('pensieve',["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "./templates/home.html",
    controller: "homeCtrl"

  })

  .state("archive", {
    url: "/archive",
    templateUrl: "./templates/archive.html"
    // controller: "archiveCtrl"

  })

  .state('breathe', {
    url: "/breathe",
    templateUrl: "./templates/breathe.html",
    controller: "breatheCtrl"
  })

  .state('anapana', {
    url: "/anapana",
    templateUrl: "./templates/anapana.html",
    controller: "anapanaCtrl"
  })

  .state('stream', {
    url: "/stream",
    templateUrl: "./templates/stream.html"
    // controller: "streamCtrl"
  })

})
