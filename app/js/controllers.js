'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'Monsters', function($scope, Monsters) {
        $scope.monsters = Monsters.query();
  }])
  .controller('MyCtrl2', [function() {

  }]);