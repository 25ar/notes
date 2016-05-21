"use strict";

angular.module("notesApplication", ["notesApplication.mainPageModule", 
    "ui.router", "notesApplication.programmingPageModule", 
    "notesApplication.administratingPageModule", "notesApplication.networksPageModule",
    "notesApplication.electronicsPageModule", "notesApplication.adminPanelModule"])
  .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProveder) {
    $stateProvider
      .state("main", {
        url: "/",
        templateUrl: "/templates/mainPage.html",
        controller: "mainCtrl"
      })
      .state("programming", {
        url: "/programming",
        templateUrl: "/templates/programming.html",
        controller: "programmingCtrl"
      })
      .state("administrating", {
        url: "/administrating",
        templateUrl: "/templates/administrating.html",
        controller: "administratingCtrl"
      })
      .state("networks", {
        url: "/networks",
        templateUrl: "/templates/networks.html",
        controller: "networksCtrl"
      })
      .state("electronics", {
        url: "/electronics",
        templateUrl: "/templates/electronics.html",
        controller: "electronicsCtrl"
      })
      .state("adminPanel", {
        url: "/adminpanel",
        templateUrl: "/templates/adminPanel.html",
        controller: "adminPanelCtrl"
      });

    $urlRouterProveder.otherwise("/");
  }])