(function() {
    'use strict';

    angular
        .module('jhipsterMongodbSampleApplicationApp')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'BankAccount'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, entity, BankAccount) {
        var vm = this;
        vm.bankAccount = entity;
        
        var unsubscribe = $rootScope.$on('jhipsterMongodbSampleApplicationApp:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
