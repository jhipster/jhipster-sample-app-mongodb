'use strict';

angular.module('sampleMongDBApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


