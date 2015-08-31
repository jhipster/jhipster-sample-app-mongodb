'use strict';

angular.module('samplemongdbApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
