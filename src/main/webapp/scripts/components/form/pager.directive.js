/* globals $ */
'use strict';

angular.module('sampleMongDBApp')
    .directive('sampleMongDBAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
