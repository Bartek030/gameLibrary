(function () {
    'use strict';

    angular.module('HangmanGame')
        .controller('HangmanGameController', HangmanGameController);

    HangmanGameController.$inject = ['HangmanGameService'];
    function HangmanGameController(HangmanGameService) {
        var hangman = this;

        hangman.letters = HangmanGameService.getLetters();
        hangman.incorrectLetterNumber = HangmanGameService.getIncorrectLetterNumber();

        hangman.startGame = function() {
            HangmanGameService.startGame();
        };

        hangman.check = function(index) {
            HangmanGameService.check(index);
            hangman.incorrectLetterNumber = HangmanGameService.getIncorrectLetterNumber();
        };
        
    }
})();