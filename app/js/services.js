'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
    .factory('Monsters', ['$resource',
        function($resource) {
            return $resource('https://o5YdoMQL3vAkgZmrebowBWYknxPFAHI1xm0msyIY:javascript-key=F0TKDNUeFLP9DT5iWWZb3QUDVPQD8y8wKWd7DDd1@api.parse.com/1/classes/monsters', {}, {
                query: {method: 'GET', isArray: true}
            })
        }
    ])
    .value('version', '0.1');
