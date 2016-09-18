angular.module( "pensieve" )
.service( "audioService", function() {
	this.playCrickets = function() {
		crickets.play()
	}
  this.stopCrickets = function() {
    crickets.pause();
  }

  this.playGong = function() {
    gong.play()
  }
  var crickets = new Audio("media/333221__hdfreema__night-crickets-back-porch.mp3")
  crickets.loop=true;

  var gong = new Audio('media/46062__reinsamba__gong.wav')

} );
