(function() {
    'use strict';

    angular
        .module('sampleMongDbApp')
        .controller('BankAccountDialogController', BankAccountDialogController);

    BankAccountDialogController.$inject = ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'BankAccount'];

    function BankAccountDialogController ($scope, $stateParams, $uibModalInstance, entity, BankAccount) {
        var vm = this;
        vm.bankAccount = entity;
        vm.load = function(id) {
            BankAccount.get({id : id}, function(result) {
                vm.bankAccount = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('sampleMongDbApp:bankAccountUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.bankAccount.id !== null) {
                BankAccount.update(vm.bankAccount, onSaveSuccess, onSaveError);
            } else {
                BankAccount.save(vm.bankAccount, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
