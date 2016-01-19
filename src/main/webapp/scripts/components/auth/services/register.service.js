'use strict';

angular.module('samplemongdbApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


