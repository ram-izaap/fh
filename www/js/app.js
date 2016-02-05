// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.initialpage', {
    url: '/initialpage',
    views: {
      'menuContent': {
        templateUrl: 'templates/initialpage.html',
        controller: 'InitialpageCtrl'
      }
    }
  })

      .state('app.createacc', {
    url: '/createacc',
    views: {
      'menuContent': {
        templateUrl: 'templates/createacc.html',
        controller: 'CreateaccCtrl'
      }
    }
  })


        .state('app.forgotpassword', {
    url: '/forgotpassword',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgotpassword.html',
        controller: 'ForgotpasswordCtrl'
      }
    }
  })


        .state('app.myclip', {
    url: '/myclip',
    views: {
      'menuContent': {
        templateUrl: 'templates/myclip.html',
        controller: 'MyclipCtrl'
      }
    }
  })


        .state('app.createhuddle', {
    url: '/createhuddle',
    views: {
      'menuContent': {
        templateUrl: 'templates/createhuddle.html',
        controller: 'CreatehuddleCtrl'
      }
    }
  })


        .state('app.createdhuddles', {
    url: '/createdhuddles',
    views: {
      'menuContent': {
        templateUrl: 'templates/createdhuddles.html',
        controller: 'CreatedhuddlesCtrl'
      }
    }
  })


        .state('app.mypublichuddle', {
    url: '/mypublichuddle',
    views: {
      'menuContent': {
        templateUrl: 'templates/mypublichuddle.html',
        controller: 'MypublichuddleCtrl'
      }
    }
  })


        .state('app.myprivatehuddle', {
    url: '/myprivatehuddle',
    views: {
      'menuContent': {
        templateUrl: 'templates/myprivatehuddle.html',
        controller: 'MyprivatehuddleCtrl'
      }
    }
  })


        .state('app.findhuddle', {
    url: '/findhuddle',
    views: {
      'menuContent': {
        templateUrl: 'templates/findhuddle.html',
        controller: 'FindhuddleCtrl'
      }
    }
  })


        .state('app.invitefriends', {
    url: '/invitefriends',
    views: {
      'menuContent': {
        templateUrl: 'templates/invitefriends.html',
        controller: 'InvitefriendsCtrl'
      }
    }
  })

          .state('app.mobilecontacts', {
    url: '/mobilecontacts',
    views: {
      'menuContent': {
        templateUrl: 'templates/mobilecontacts.html',
        controller: 'MobilecontactsCtrl'
      }
    }
  })

            .state('app.fanthemappusers', {
    url: '/fanthemappusers',
    views: {
      'menuContent': {
        templateUrl: 'templates/fanthemappusers.html',
        controller: 'FanthemappusersCtrl'
      }
    }
  })


        .state('app.facebooklogin', {
    url: '/facebooklogin',
    views: {
      'menuContent': {
        templateUrl: 'templates/facebooklogin.html',
        controller: 'FacebookloginCtrl'
      }
    }
  })


        .state('app.twitterlogin', {
    url: '/twitterlogin',
    views: {
      'menuContent': {
        templateUrl: 'templates/twitterlogin.html',
        controller: 'TwitterloginCtrl'
      }
    }
  })




 .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

.state('app.videocam', {
    url: '/videocam',
    views: {
      'menuContent': {
        templateUrl: 'templates/videocam.html',
        controller: 'VideocamCtrl'
      }
    }
  })

  .state('app.notifications', {
    url: '/notifications',
    views: {
      'menuContent': {
        templateUrl: 'templates/notifications.html',
        controller: 'NotificationsCtrl'
              }
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
   

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'
        }
      }
    })

  .state('app.articles', {
    url: '/articles',
    views: {
      'menuContent': {
        templateUrl: 'templates/articles.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

   .state('app.myactivity', {
    url: '/myactivity',
    views: {
      'menuContent': {
        templateUrl: 'templates/myactivity.html',
        controller: 'MyactivityCtrl'
      }
    }
  })


    .state('app.videos', {
    url: '/videos',
    views: {
      'menuContent': {
        templateUrl: 'templates/videos.html',
        controller: 'VideosCtrl'
      }
    }
  })


     .state('app.audio', {
    url: '/audio',
    views: {
      'menuContent': {
        templateUrl: 'templates/audio.html',
        controller: 'AudioCtrl'
      }
    }
  })

      .state('app.webrants', {
    url: '/webrants',
    views: {
      'menuContent': {
        templateUrl: 'templates/webrants.html',
        controller: 'WebrantsCtrl'
      }
    }
  })

       .state('app.share', {
    url: '/share',
    views: {
      'menuContent': {
        templateUrl: 'templates/share.html',
        controller: 'ShareCtrl'
      }
    }
  })

        .state('app.logout', {
    url: '/logout',
    views: {
      'menuContent': {
        templateUrl: 'templates/logout.html',
        controller: 'LogoutCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
