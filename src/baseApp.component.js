(function () {
    'use strict';

    angular.module('BaseApp')
        .component('navigationItemList', {
            templateUrl: 'src/baseAppNavigation.html',
            bindings: {
                items: '<',
                onClickAction: '&',
                onHoverAction: '&'
            }
        });
})();