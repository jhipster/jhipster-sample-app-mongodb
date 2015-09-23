'use strict';

angular.module('samplemongdbApp')
    .controller('BankAccountDetailController', function ($scope, $rootScope, $stateParams, entity, BankAccount) {
        $scope.bankAccount = entity;
        $scope.load = function (id) {
            BankAccount.get({id: id}, function(result) {
                $scope.bankAccount = result;
            });
        };
        $rootScope.$on('samplemongdbApp:bankAccountUpdate', function(event, result) {
            $scope.bankAccount = result;
        });
    });
