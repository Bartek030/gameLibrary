(function () {
    'use strict';

    angular.module('HangmanGame')
        .controller('HangmanGameController', HangmanGameController);

    HangmanGameController.$inject = ['HangmanGameService'];
    function HangmanGameController(HangmanGameService) {
        var hangman = this;

        
    }
})();