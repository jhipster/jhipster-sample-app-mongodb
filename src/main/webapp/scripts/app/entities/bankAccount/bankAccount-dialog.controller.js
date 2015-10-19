'use strict';

angular.module('sampleMongDBApp').controller('BankAccountDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'BankAccount',
        function($scope, $stateParams, $modalInstance, entity, BankAccount) {

        $scope.bankAccount = entity;
        $scope.load = function(id) {
            BankAccount.get({id : id}, function(result) {
                $scope.bankAccount = result;
            });
        };

        var onSaveFinished = function (result) {
            $scope.$emit('sampleMongDBApp:bankAccountUpdate', result);
            $modalInstance.close(result);
        };

        $scope.save = function () {
            if ($scope.bankAccount.id != null) {
                BankAccount.update($scope.bankAccount, onSaveFinished);
            } else {
                BankAccount.save($scope.bankAccount, onSaveFinished);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
