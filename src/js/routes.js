var app = angular.module("confluente");

/* List of special defined pages.
   When navigating to a URL, the URL will first be checked to match one of these HTML pages (in this order).
   If no match occurs, the pages database will be searched. */

var routes = [
    require("./home/view"),
    require("./user/create"),
    require("./user/view"),
    require("./user/edit"),
    require("./user/delete"),
    require("./activities/"),
    require("./activities/view"),
    require("./activities/create"),
    require("./activities/edit"),
    require("./group/create"),
    require("./group/edit"),
    require("./group/view"),
    require("./group/delete"),
    require("./page/create"),
    require("./page/edit"),
    require("./manage"),
    require("./page/page"),
    require("./page/view"),
];

module.exports = routes;
