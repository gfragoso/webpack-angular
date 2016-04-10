function ClientService($q, $http) {
    return {
        get: get
    };

    function get() {
        return $q(function(resolve, reject) {
            resolve(true);
        });
    }
}

module.exports = function(app) {
    app.service('clientService', ClientService);
};
