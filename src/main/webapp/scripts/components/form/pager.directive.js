/* globals $ */
'use strict';

angular.module('samplemongdbApp')
    .directive('samplemongdbAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
