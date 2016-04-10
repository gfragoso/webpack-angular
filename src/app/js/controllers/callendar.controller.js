function CallendarController($scope, $state) {
    var vm = this;
    vm.init = init;

    function init() {
        
    }
}

module.exports = function(app) {
    app.controller('callendarController', CallendarController);
};
