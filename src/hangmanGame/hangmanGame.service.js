(function () {
    'use strict';

    angular.module('HangmanGame')
        .service('HangmanGameService', HangmanGameService);

    HangmanGameService.$inject = ['$timeout']
    function HangmanGameService($timeout) {
        var service = this;
        
    };
})();