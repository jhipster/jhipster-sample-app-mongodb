(function () {
    'use strict';

    angular
        .module('jhipsterMongodbSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
