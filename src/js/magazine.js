var app = angular.module("confluente");

/**
 * Controller for the magazine
 */
app.controller("magazineController", ["$scope", function ($scope) {
    $scope.magazine = [];

    for (var i = 1; i <= 52; i++) {
        var name = './img/magazine/magazine V5-' + pad(i, 2) + '.jpg'
        $scope.magazine.push(name);
    }

    function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }


    $("#flipbook").turn({
        width: 1124,
        height: 800,
        autoCenter: true
    });
}]);

module.exports = {
    name: "Context Magazine",
    url: "/magazine",
    parent: "/",
    templateUrl: "/www/pages/magazine.html",
    controller: "magazineController"
};
