 'use strict';

angular.module('samplemongdbApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplemongdbApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplemongdbApp-params')});
                }
                return response;
            },
        };
    });