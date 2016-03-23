(function () {
    'use strict';

    angular
        .module('sampleMongDbApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
