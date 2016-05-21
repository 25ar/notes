"use strict";

angular.module('notesApplication.mainPageModule', [])
  .controller("mainCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
    $rootScope.title = "goo";
}]);