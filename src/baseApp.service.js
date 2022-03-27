(function () {
    'use strict';

    angular.module('BaseApp')
        .service('BaseAppService', BaseAppService);

    BaseAppService.$inject = ['$timeout'];
    function BaseAppService($timeout) {
        var service = this;

        /* Hardcoded nav items */
        var navItems = [
            {
                state: "home",
                imageNameOne: "bx bx-home",
                imageNameTwo: "bx bxs-home",
                title: "Strona główna"
            }, 
            {
                state: "memoryGame",
                imageNameOne: "bx bx-brain",
                imageNameTwo: "bx bxs-brain",
                title: "Gra w pamięć"
            }
        ];

        service.getNavItems = function() {
            return navItems;
        }
    }
})();