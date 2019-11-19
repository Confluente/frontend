var app = angular.module('confluente');

app.controller('controllerPage', ['$rootScope', '$scope', '$routeParams', 'pages',
    function($rootScope, $scope, $routeParams, pages) {

        var pageUrl = $routeParams.url;

        // set the variable to report that the page is loading
        $scope.loading = true;

        pages.get(pageUrl).then( function(page) {
            $scope.page = page;
            $scope.loading = false;
        });

        $scope.$on('$includeContentError', function(e, src) {
            $scope.contentUrl = fallbackUrl;
        });

}]);

// define the path to the 404 page
var fallbackUrl = '/www/404.html';


module.exports = {
    url:          '/p/:url*',
    parent:       '/',
    templateUrl:  '/www/templates/page.html',
    controller:   'controllerPage'
};
