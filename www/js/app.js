// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova',
  'starter.services','LocalStorageModule','ion-datetime-picker','ui.rCalendar'])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
   
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  if(window.Connection) {//uygulama run edildiğinde calısır
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Bağlantısı Kesildi",
                        content: "Cihazınızda İnternet Erişimi Yok."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }}

  });
  //butun uygulama ıcınde gozlemcı olacak bır uygulama gerekıyor

})
.run(['authService', function (authService) {
    authService.fillAuthData();
}])

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
 

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

.state('login', {
   url: "/login",
  templateUrl: "templates/menu/login.html",
    controller: 'LoginCtrl'
})

.state('note', {
      url: '/note',
      controller: 'noteController',
      templateUrl: 'templates/menu/add-note.html'
    })
 .state('diary', {
      url: '/diary',
      controller: 'CalendarCtrl',
      templateUrl: 'templates/menu/date-block.html'
    })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.dash-detail',{
  url:'/task/:taskid',
   views: {
        'tab-dash': {
          templateUrl: 'templates/dash/dash-detail.html',
          controller: 'DashDetailCtrl'
        }
      }
})
   .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/dash/tab-okTask.html'
         
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        
      }
    }
  });
 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
