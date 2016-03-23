(function() {
    'use strict';

    angular
        .module('sampleMongDbApp')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'BankAccount'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, entity, BankAccount) {
        var vm = this;
        vm.bankAccount = entity;
        vm.load = function (id) {
            BankAccount.get({id: id}, function(result) {
                vm.bankAccount = result;
            });
        };
        var unsubscribe = $rootScope.$on('sampleMongDbApp:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
