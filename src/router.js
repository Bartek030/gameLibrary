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

        .state('tab1', {
            url: '/tab1',
            templateUrl: 'src/tab1.html'
        })

        .state('tab2', {
            url: '/tab2',
            templateUrl: 'src/tab2.html'
        });
    }

})();