'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MonstersCtrl', ['$scope', 'Monsters', 'MonstersCache', function($scope, Monsters, MonstersCache) {
        var data = MonstersCache.get('list')
        if (data) {
            $scope.monsters = data
        } else {
            $scope.monsters = Monsters.query()
            MonstersCache.put('list', $scope.monsters)
        }
  }])
  .controller('MonsterCtrl', ['$scope', '$routeParams', 'Monster', 'MonstersCache', function($scope, $routeParams, Monster, MonstersCache) {
        var data = MonstersCache.get($routeParams.monsterName)
        if (data) {
            console.log('retrieve ' + $routeParams.monsterName + ' from cache')
            $scope.monster = data
        } else {
            $scope.monster = Monster($routeParams.monsterName).get()
            MonstersCache.put($routeParams.monsterName, $scope.monster)
        }
  }]);