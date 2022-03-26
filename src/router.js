(function () {
    'use strict';

    angular.module('SimpleGames', ['ui.router', 'MemoryGame']);

    angular.module('SimpleGames')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page no other URL matches
        $urlRouterProvider.otherwise('/home');

        // Set up UI states
        $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'src/templates/home.html'
        })

        .state('memoryGame', {
            url: '/memoryGame',
            templateUrl: 'src/templates/memoryGame.html',
            controller: 'MemoryGameController as memory'
        });
    }

})();