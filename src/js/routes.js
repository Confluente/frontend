var app = angular.module("confluente");

var routes = [
    require("./home/view"),
    require("./user/create"),
    require("./user/view"),
    require("./user/edit"),
    require("./activities/"),
    require("./activities/view"),
    require("./activities/create"),
    require("./activities/edit"),
    require("./page/create"),
    require("./page/manage"),
    require("./page/edit"),
    require("./page/view"),
    require("./manage")
];

module.exports = routes;
