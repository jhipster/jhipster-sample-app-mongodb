 'use strict';

angular.module('sampleMongDBApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleMongDBApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleMongDBApp-params')});
                }
                return response;
            }
        };
    });
