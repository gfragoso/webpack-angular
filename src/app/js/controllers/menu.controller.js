'use strict';

function MenuController($scope, $state) {

    var vm = this;
    vm.init = init;

    function init() {
    }
}

module.exports = function(app) {
    app.controller('menuController', MenuController);
};
