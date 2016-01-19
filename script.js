/**
 * Created by Oleg_Malyshev on 1/19/2016.
 */


   angular.module("app",['ngRoute']).config(function($routeProvider){
      $routeProvider.when('/home',{templateUrl:'./home.html'})
          .when('/message',{templateUrl:'./message.html'})
          .otherwise({redirectTo:'/home'})
   });




