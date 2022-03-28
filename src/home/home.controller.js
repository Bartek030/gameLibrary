(function () {
    'use strict';

    angular.module('Home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['BaseAppService'];
    function HomeController(BaseAppService) {
        var home = this;

        home.items = BaseAppService.getNavItems();
    }
})();