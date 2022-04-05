(function () {
    'use strict';

    angular.module('HangmanGame')
        .service('HangmanGameService', HangmanGameService);

    HangmanGameService.$inject = ['$timeout']
    function HangmanGameService($timeout) {
        var service = this;
        var yes = new Audio("resources/sounds/hangmanGame/yes.wav");
        var no = new Audio("resources/sounds/hangmanGame/no.wav");

        var LETTERS = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];

        var PHRASES_TO_PICK = [
            "Bez pracy nie ma kołaczy",
            "Darowanemu koniowi w zęby się nie zagląda",
            "Fortuna kołem się toczy",
            "Nie chwal dnia przed zachodem słońca",
            "Lepszy wróbel w garści niż gołąb na dachu",
            "Apetyt rośnie w miarę jedzenia",
            "Co ma wisieć nie utonie",
            "Dzieci i ryby głosu nie mają",
            "Grosz do grosza a będzie kokosza",
            "Łaska pańska na pstrym koniu jeździ"
        ];
        
        var phrase = "";
        var phraseTemplate = "";
        var phraseLength;
        var incorrectLetterNumber = 0;
        var isGameStarted = false;

        service.getIncorrectLetterNumber = function() {
            return incorrectLetterNumber;
        };

        service.getLetters = function() {
            return LETTERS;
        };
 
        service.getIsGameStarted = function() {
            return isGameStarted;
        }

        service.startGame = function() {
            // TODO: pobranie z bazy nowego hasła @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            incorrectLetterNumber = 0;
            phrase = pickPhrase();
            phraseLength = phrase.length;

            for (var i = 0; i < phraseLength; i++) {
                if (phrase.charAt(i) == " ") {
                    phraseTemplate = phraseTemplate + " ";
                } else {
                    phraseTemplate = phraseTemplate + "_";
                }
            }
            isGameStarted = true;
            writePhrase();
        };

        service.check = function(number) {
            var isCorrect = false;
            for(var i = 0; i < phraseLength; i++) {
                if(phrase.charAt(i) == LETTERS[number]) {
                    phraseTemplate = phraseTemplate.setChar(i, LETTERS[number]);
                    isCorrect = true;
                }
            }
        
            if(isCorrect) {
                yes.play();
                $("#let" + number).css('background', '#003300');
                $("#let" + number).css('color', '#00C000');
                $("#let" + number).css('border', '3px solid #00C000');
                $("#let" + number).css('cursor', 'default');     
                writePhrase();
            } else {
                no.play();
                $("#let" + number).css('background', '#330000');
                $("#let" + number).css('color', '#C00000');
                $("#let" + number).css('border', '3px solid #C00000');
                $("#let" + number).css('cursor', 'default');
        
                $("#let" + number).removeAttr("ng-click");
        
                incorrectLetterNumber++;
            }
        
            if(phrase == phraseTemplate) {
                $("#alphabet").html("Tak jest! Podano prawidłowe hasło: " + phrase + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');
                isGameStarted = false;
            }
        
            if(incorrectLetterNumber >= 9) {
                $("#alphabet").html("Przegrana! Prawidłowe hasło: " + phrase + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');
                isGameStarted = false;
            }
        };

        function writePhrase() {
            $("#hangmanGame-box").html(phraseTemplate);
        };

        function pickPhrase() {
            var randomNumber = Math.floor(Math.random() * PHRASES_TO_PICK.length);
            return PHRASES_TO_PICK[randomNumber].toUpperCase();
        }

        String.prototype.setChar = function(place, char) {
            if(place > this.length - 1) {
                return this.toString();
            } else {
                return this.substr(0, place) + char + this.substr(place + 1);
            }
        };
    };
    
})();