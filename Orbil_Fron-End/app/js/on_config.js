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
  .state('Article', {
    url: '/article',
    controller: 'ExampleCtrl as home',
    templateUrl: 'article.html',
    title: 'Article'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
