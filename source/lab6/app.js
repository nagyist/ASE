// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])//angular.module('myApp', ['myApp.directives', 'myApp.services']);

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
   
  
   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
   .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })
   .state('patient', {
      url: '/SearchDoctors',
      templateUrl: 'templates/SearchDoctors.html',
      controller: 'SearchCtrl'
  })
   .state('doctor', {
      url: '/ViewDoctors',
      templateUrl: 'templates/ViewDoctors.html',
      controller: 'ViewCtrl'
  })
    .state('doctor1', {
      url: '/ScheduleAppointment',
      templateUrl: 'templates/ScheduleAppointment.html',
      controller: 'ScheduleCtrl'
  })
  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
  
  })
    .state('camera', {
      url: '/camera',
      templateUrl: 'templates/camera.html',
      controller: 'ExampleCtrl'
  
  })
  .state('session', {
      url: '/session',
      templateUrl: 'templates/session.html',
      controller: 'SessionCtrl'
  
  })
  
  .state('confirm', {
      url: '/Confirmation',
      templateUrl: 'templates/Confirmation.html',
      controller: 'ConfirmCtrl'
  
  })
   
   
  // if none of the above states are matched, use this as the fallback
 // $urlRouterProvider.otherwise('/tab/dash');
    $urlRouterProvider.otherwise('/home');

});
