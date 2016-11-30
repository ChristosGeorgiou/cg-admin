(function () {
    'use strict';

    angular
        .module('cg.admin')
        .directive('contentWrapper', contentWrapper)

    contentWrapper.$inject = ['$window'];

    function contentWrapper($window) {

        var directive = {
            restrict: 'C',
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

            var header = 35;
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