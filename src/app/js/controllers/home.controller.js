function HomendarController($scope, $state) {
    var vm = this;
    vm.init = init;

    function init() {

    }
}

module.exports = function(app) {
    app.controller('homeController', HomendarController);
};
