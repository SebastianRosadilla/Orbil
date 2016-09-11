function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  });

  $stateProvider
  .state('Content', {
    url: '/contetn',
    controller: 'ExampleCtrl as home',
    templateUrl: 'content.html',
    title: 'Content'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
