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
            width: 562,
            height: 800,
            autCenter: true,
            display: "single"
        })
    } else {
        $("#magazineDesk").turn({
            width: 1124,
            height: 800,
            autoCenter: true,
            display: "double"
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