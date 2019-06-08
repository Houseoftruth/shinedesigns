(function () {

    console.log("routes.js loaded");

    var app = angular.module("appRoutes", ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        //Only providers in config phase... no $rootScope or any other instances...



        $routeProvider
        
            .when('/', {
                templateUrl: '../home.html',
                controller: 'mainCtrl',
                name: "SHINE BRIGHT COACHING | HOME",
                resolve: {
                    init: function ($route) {
                        //console.log("index")
                    }
                }
            })
            .when('/estimate', {
                templateUrl: '../estimate.html',
                controller: 'mainCtrl',
                name: "SHINE BRIGHT COACHING | HOME",
                resolve: {
                    init: function ($route) {
                        //console.log("index")
                    }
                }
            })
            .when('/forms', {
                templateUrl: '../op.html',
                name: "SHINE BRIGHT COACHING | FORMS",
                controller: "mainCtrl",
                controllerAs: 'main',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
            .when('/server', {
                templateUrl: '../server.html',
                name: "SHINE BRIGHT COACHING | FORMS",
                controller: "mainCtrl",
                controllerAs: 'main',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
            .when('/char', {
                templateUrl: '../charo.html',
                name: "SHINE BRIGHT COACHING | FORMS",
                controller: "mainCtrl",
                controllerAs: 'main',
                resolve: {
                    init: function ($route) {
                        console.log("index")
                    }
                }
            })
            
            .otherwise({
                redirectTo: '/'
            });

       $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false
            //now no more # required before routes
        })
        
        
  
    })

     app.run(['$rootScope',  function ($rootScope, $routeUpdate, $routeParams) {
/*
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            //console.log(Auth.isLoggedIn());
            console.log(next.$$route.name);
            $rootScope.title = next.$$route.name;
          
            //if($routeParams.name == )

        });

*/
    }]);

}())