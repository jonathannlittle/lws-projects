/**
 * Created by Nathan Little on 4/28/2016.
 *
 * main router
 */

(function(){
    //this is our main module for the router.
    var app = angular.module( "lws.router" , ["ui.router"] );

    app.config(function($stateProvider, $urlRouterProvider) {
        
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/views/home.html"
            });
    });

})();

