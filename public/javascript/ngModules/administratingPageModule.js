"use strict";

angular.module("notesApplication.administratingPageModule", [])
  .controller("administratingCtrl", ["$rootScope", "$scope", function ($rootScope, $scope) {
    var video = document.getElementById("video");
    var play = document.getElementById("playButton");

    play.onclick = function() {
      if(video.paused) {
        video.play();
        play.innerHTML = "||";
      } else {
        video.pause();
        play.innerHTML = ">";
      }
    }
  }]);