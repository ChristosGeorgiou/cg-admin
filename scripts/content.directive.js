(function () {
    'use strict';

    angular
        .module('cg.admin')
        .directive('cgadminContentWrapper', cgadminContentWrapper)

    /* @ngInject */
    function cgadminContentWrapper($window, cgadminConfig) {

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, element, attrs) {

            fix(element);

            angular.element($window)
                .bind('resize', function () {
                    fix(element);
                });

        }

        function fix(element) {

            var header = cgadminConfig.topbarHeight;
            if (window.innerWidth < 767) {
                header *= 2;
            }

            element.css({
                marginTop: header + 'px',
                height: window.innerHeight - header + 'px'
            });

        }

    }

}());