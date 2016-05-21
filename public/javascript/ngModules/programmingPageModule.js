"use strict";

angular.module("notesApplication.programmingPageModule", [])
  .controller("programmingCtrl", ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http) {
    $scope.posts;
    $http({method: "POST", data: {section: "programing"}, url: "requestContent"})
    .then(function(data) {
      console.log(data.data);
      $scope.posts = data.data;
    }, function(data) {
      console.log(data);
    })
  }])