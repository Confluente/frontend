var app = angular.module('confluente');

app.controller('pageViewController', ['$rootScope', '$scope', '$routeParams',
    function($rootScope, $scope, $routeParams) {

        // set the variable to report that the page is loading
        $scope.loading = true;

        // set the content url
        $scope.contentUrl = getPageUrl($routeParams);

        $scope.$on('$includeContentError', function(e, src) {
            $scope.contentUrl = fallbackUrl;
        });

}]);

// define the path to the 404 page
var fallbackUrl = '/www/404.html';

function getPageUrl(routeParams) {
    /* Returns the location of the HTML file */
    return '/www/pages/' + routeParams.url + '.html';
}


module.exports = {
    url:          '/:url*',
    parent:       '/',
    templateUrl:  '/www/templates/default.html',
    controller:   'pageViewController'
};
