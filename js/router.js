(function () {
    'use strict';

    angular.module('SimpleGames')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfig($stateProvider, $urlRouterProvider) {

        // Redirect to the home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: ''
            })
    }

})();