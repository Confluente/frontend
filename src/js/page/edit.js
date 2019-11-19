var app = angular.module("confluente");

app.controller("pageEditController", ["$scope", "$routeParams", "pages", function ($scope, $routeParams, pages) {
    var pageUrl = $routeParams.pageUrl;
    $scope.loading = true;
    pages.get(pageUrl).then(function (page) {
        $scope.page = page;
        $scope.loading = false;
    });

    $scope.submit = function () {
        $scope.loading = true;
        console.log($scope);
        pages.edit($scope.page).then(function (result) {
            $scope.loading = false;
            window.location.href = "/p/" + $scope.page.url;
        });
    };
}]);

module.exports = {
    name: "Edit Page",
    url: "/p/:pageUrl/edit",
    parent: "/manage",
    templateUrl: "/www/templates/page/pageEdit.html",
    controller: "pageEditController"
};
