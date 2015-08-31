/* globals $ */
'use strict';

angular.module('samplemongdbApp')
    .directive('samplemongdbAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
