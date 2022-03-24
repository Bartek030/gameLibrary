(function () {
    'use strict';
    
    angular.module('MemoryGame')
        .controller('MemoryGameController', MemoryGameController);

    MemoryGameController.$inject = ['MemoryGameService'];
    function MemoryGameController(MemoryGameService) {
        var memory = this;

        memory.cardList = [];
        memory.isCardListEmpty = true;
        
        memory.startNewGame = function() {
            memory.cardList = MemoryGameService.getCards();
            memory.isCardListEmpty = false;
        };

        memory.revealCard = function(index) {
            MemoryGameService.revealCard(index, memory.cardList);
        };  
    }
})();