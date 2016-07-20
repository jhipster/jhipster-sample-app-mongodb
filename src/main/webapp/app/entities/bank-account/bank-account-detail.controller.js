(function() {
    'use strict';

    angular
        .module('jhipsterMongodbSampleApplicationApp')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'BankAccount'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, previousState, entity, BankAccount) {
        var vm = this;

        vm.bankAccount = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterMongodbSampleApplicationApp:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
