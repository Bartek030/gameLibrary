(function () {
    'use strict';

    angular.module('BaseApp')
        .controller('BaseAppController', BaseAppController);

    BaseAppController.$inject = ['BaseAppService', '$timeout'];
    function BaseAppController(BaseAppService, $timeout) {
        var baseApp = this;

        baseApp.navItems = BaseAppService.getNavItems();

        baseApp.clickShrinkButton = function() {
            $("body").toggleClass("shrink");
            $(".shrink-button").addClass("hovered");
            $timeout(function() {
                $(".shrink-button").removeClass("hovered");
            }, 500);
        };

        baseApp.changeActiveTab = function() {
            $(".sidebar-links a").removeClass("active");
            $(".sidebar-links a").click(function() {
                $(this).addClass("active");
                moveActiveTab(this.dataset.active);
            });
        };

        baseApp.showTooltip = function() {
            $(".tooltip-element > a").mouseover(function() {
                var index = this.dataset.active;
                var topPosition = index * (53 + 2 * 2.5) + 2.5;
                var tooltipValue = $(".tooltip-element > a > span#navItem" + index).text();
                $(".tooltip > span").html(tooltipValue);
                $(".tooltip").css("top", topPosition);
            });
        };

        function moveActiveTab(index) {
            // 53 - activeTab height, 2 * 2.5 - sidebar links padding, 2.5 - active tab top
            var topPosition = index * (53 + 2 * 2.5) + 2.5;
            $(".active-tab").css("top", topPosition);
        }
    }
})();