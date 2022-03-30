(function () {
    'use strict';

    angular.module('BaseApp')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page no other URL matches
        $urlRouterProvider.otherwise('/home');

        // Set up UI states
        $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'src/home/home.html',
            controller: 'HomeController as home'
        })

        .state('memoryGame', {
            url: '/memoryGame',
            templateUrl: 'src/memoryGame/memoryGame.html',
            controller: 'MemoryGameController as memory'
        });
    }

})();