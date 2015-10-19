'use strict';

angular.module('sampleMongDBApp')
    .controller('BankAccountDetailController', function ($scope, $rootScope, $stateParams, entity, BankAccount) {
        $scope.bankAccount = entity;
        $scope.load = function (id) {
            BankAccount.get({id: id}, function(result) {
                $scope.bankAccount = result;
            });
        };
        var unsubscribe = $rootScope.$on('sampleMongDBApp:bankAccountUpdate', function(event, result) {
            $scope.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
