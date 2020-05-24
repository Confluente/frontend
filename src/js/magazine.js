var app = angular.module("confluente");

/**
 * Controller for the magazine
 */
app.controller("magazineController", ["$scope", function ($scope) {
    // after coming from homepage, page is scrolled down (bug?)
    // therefore, scroll to top at start
    window.scrollTo(0, 0);

    // initialize turn js magazine
    if (window.mobileCheck()) {
        $("#magazineMob").turn({
            width: 560,
            height: 792,
            autCenter: true,
            display: "single",
            acceleration: false
        });
    } else {
        $("#magazineDesk").turn({
            width: 1110,
            height: 792,
            autoCenter: true,
            display: "double",
            acceleration: false
        });
    }


}]);

module.exports = {
    name: "Context Magazine",
    url: "/magazine",
    parent: "/",
    templateUrl: "/www/pages/magazine.html",
    controller: "magazineController"
};
