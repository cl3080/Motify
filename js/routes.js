angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.motify', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/motify.html',
        controller: 'motifyCtrl'
      }
    }
  })

  .state('menu.me', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/me.html',
        controller: 'meCtrl'
      }
    }
  })

  .state('menu.trend', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trend.html',
        controller: 'trendCtrl'
      }
    }
  })

  .state('menu.search', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.kongSkullIsland', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kongSkullIsland.html',
        controller: 'kongSkullIslandCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});