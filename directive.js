angular.module('pensieve')
.directive('myDirective', function() {
   return {
      template: '<div class="navBar"></div>'
       templateUrl: "./templates/stream.html",
       link: function ($scope, element, attrs) {
           if($scope.streamed) {function() {
               element.css('opacity:1');
   }
}
}
})
