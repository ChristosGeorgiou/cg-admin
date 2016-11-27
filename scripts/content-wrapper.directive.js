(function () {
    'use strict';

    angular
        .module('cg.admin')
        .directive('contentWrapper', contentWrapper)

    contentWrapper.$inject = ['$window', '$timeout'];
    function contentWrapper($window, $timeout) {

        var directive = {
            restrict: 'C',
            link: link
        };

        return directive;

        function link(scope, wrapper, attrs) {

            fix(wrapper);

            angular.element($window)
                .bind('resize', function () {
                    fix(wrapper);
                });

        }

        function fix(element) {

            element.css({
                height: window.innerHeight + 'px'
            });

        }

    }

}());