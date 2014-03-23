'use strict';

//Parse.initialize("o5YdoMQL3vAkgZmrebowBWYknxPFAHI1xm0msyIY", "F0TKDNUeFLP9DT5iWWZb3QUDVPQD8y8wKWd7DDd1");

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monsters', {templateUrl: 'partials/monsters.html', controller: 'MonstersCtrl'});
  $routeProvider.when('/monsters/:monsterName', {templateUrl: 'partials/monster.html', controller: 'MonsterCtrl'});
  $routeProvider.otherwise({redirectTo: '/monsters'});
}]);
