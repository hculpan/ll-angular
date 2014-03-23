'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
    .factory('MonstersCache', function($cacheFactory) {
        return $cacheFactory('MonstersCache', {})
    })
    .factory('Monsters', ['$resource',
        function($resource) {
            return $resource('https://api.parse.com/1/classes/monsters', {keys: 'name,hd', limit: '1000'}, {
                query: {
                    method: 'GET',
                    headers: {
                        'X-Parse-Application-Id':'o5YdoMQL3vAkgZmrebowBWYknxPFAHI1xm0msyIY',
                        'X-Parse-REST-API-Key':'WgYxkAzAAFRVHCGScT9dZkKwN1COuFazaxzbm4ex'
                    }
                }
            })
        }
    ])
    .factory('Monster', ['$resource',
        function($resource) {
            return function(monsterName) {
                return $resource('https://api.parse.com/1/classes/monsters', {where: '{"name": "' + monsterName + '"}'}, {
                    get: {
                        method: 'GET',
                        isArray: false,
                        responseType: 'json',
                        headers: {
                            'X-Parse-Application-Id':'o5YdoMQL3vAkgZmrebowBWYknxPFAHI1xm0msyIY',
                            'X-Parse-REST-API-Key':'WgYxkAzAAFRVHCGScT9dZkKwN1COuFazaxzbm4ex'
                        }
                    }
                })
            }
        }
    ])
    .value('version', '0.1');
