(function() {
    'use strict';

    angular
        .module('jhipsterMongodbSampleApplicationApp')
        .controller('BankAccountDialogController', BankAccountDialogController);

    BankAccountDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'BankAccount'];

    function BankAccountDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, BankAccount) {
        var vm = this;
        vm.bankAccount = entity;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        var onSaveSuccess = function (result) {
            $scope.$emit('jhipsterMongodbSampleApplicationApp:bankAccountUpdate', result);
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
