(function () {
    'use strict';

    angular.module('MemoryGame')
        .service('MemoryGameService', MemoryGameService);

    MemoryGameService.$inject = ['$timeout']
    function MemoryGameService($timeout) {
        var service = this;
        var BASE_CARD_LIST = [
            "ciri.png",
            "geralt.png",
            "jaskier.png",
            "jaskier.png",
            "iorweth.png",
            "triss.png",
            "geralt.png",
            "yen.png",
            "ciri.png",
            "triss.png",
            "yen.png",
            "iorweth.png"
        ];

        var oneVisible = false;
        var turnCounter = 0;
        var visibleNumber;
        var lock = false;
        var pairsLeft = 6;

        service.getCards = function () {
            var cardsTableCopy = BASE_CARD_LIST;
            var cardsToPlay = [];

            for (var i = BASE_CARD_LIST.length - 1; i >= 0; i--) {
                var randomIndexFromCardTable = Math.floor(Math.random() * cardsTableCopy.length);
                cardsToPlay.push(cardsTableCopy[randomIndexFromCardTable]);
                cardsTableCopy.splice(randomIndexFromCardTable, 1);
            }
            return cardsToPlay;
        }

        service.revealCard = function (number, cardList) {
            var opacityValue = $('#c' + number).css('opacity');

            if (opacityValue != 0 && lock == false) {
                lock = true;
                var image = "url(/resources/img/memoryGame/" + cardList[number] + ")";

                $('#c' + number).css('background-image', image);
                $('#c' + number).addClass('cardA');
                $('#c' + number).removeClass('card');

                if (oneVisible == false) {
                    //first card
                    oneVisible = true;
                    visibleNumber = number;
                    lock = false;
                } else {
                    //second card
                    if (cardList[visibleNumber] == cardList[number]) {
                        $timeout(function () {
                            hideTwoCards(number, visibleNumber)
                        }, 750);
                    } else {
                        $timeout(function () {
                            restoreTwoCards(number, visibleNumber)
                        }, 1000);
                    }

                    turnCounter++;
                    $('.score').html('Turn counter: ' + turnCounter);
                    oneVisible = false;
                }
            }
        }

        function hideTwoCards(number1, number2) {
            $('#c' + number1).css('opacity', '0');
            $('#c' + number2).css('opacity', '0');
            lock = false;
            pairsLeft--;

            if (pairsLeft <= 0) {
                $('.board').html("<h3>Wygrałeś!<br>Wykonano " + turnCounter + ' ruchów!</h3>');
            }
        }

        function restoreTwoCards(number1, number2) {
            $('#c' + number1).css('background-image', 'url(/resources/img/memoryGame/karta.png)');
            $('#c' + number1).addClass('card');
            $('#c' + number1).removeClass('cardA');

            $('#c' + number2).css('background-image', 'url(/resources/img/memoryGame/karta.png)');
            $('#c' + number2).addClass('card');
            $('#c' + number2).removeClass('cardA');
            lock = false;
        }
    };
})();