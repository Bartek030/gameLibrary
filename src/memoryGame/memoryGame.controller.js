(function () {
    'use strict';
    
    angular.module('MemoryGame')
        .controller('MemoryGameController', MemoryGameController);

    MemoryGameController.$inject = ['MemoryGameService'];
    function MemoryGameController(MemoryGameService) {
        var memory = this;

        memory.cardList = MemoryGameService.getCards();

        memory.revealCard = function(index) {
            MemoryGameService.revealCard(index, memory.cardList);
        }  
    }
})();