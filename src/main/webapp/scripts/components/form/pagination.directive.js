/* globals $ */
'use strict';

angular.module('sampleMongDBApp')
    .directive('sampleMongDBAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
