'use strict';

function HostConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/callendar');

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            displayName: "app",
            controller: 'menuController as vm',
            template: require('../templates/index.template.html')
        })
        .state('app.home', {
            url: '/home',
            displayName: "home",
            views: {
                main: {
                    template: require('../templates/home.template.html'),
                    controller: 'homeController as vm'
                }
            }
        })
        .state('app.callendar', {
            url: '/callendar',
            displayName: "callendar",
            views: {
                main: {
                    template: require('../templates/callendar.template.html'),
                    controller: 'callendarController as vm'
                }
            }
        });
}

module.exports = function(app) {
    app.config(HostConfig);
};
