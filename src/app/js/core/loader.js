module.exports = function(app) {

    return {
        services: services,
        controllers: controllers
    };

    function services() {
        var context = require.context('../services', false, /\.service.js$/);
        context.keys().forEach(function(item) {
            context(item)(app);
        });
    }

    function controllers() {
        var context = require.context('../controllers', false, /\.controller.js$/);
        context.keys().forEach(function(item) {
            context(item)(app);
        });
    }
};
