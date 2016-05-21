"use strict";

angular.module("notesApplication.adminPanelModule", [])
  .controller("adminPanelCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.submit = function() {
      $scope.title;
      $scope.contentBody;
      $scope.section;
      $http({method: "POST", data: {
                                    title: $scope.title,
                                    contentBody: $scope.contentBody,
                                    section: $scope.section
                                    }, 
                                      url: "newContent"})
        .then(function(data) {
          console.log(data);
        }, function(data) {
          console.error(data);
        }
        );
    }
  }]);