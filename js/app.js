var app = angular.module('techlifeApp', ['ngRoute']);

app.controller('TechlifeCtrl', function($scope) {
  $scope.episodes = siteData.episodes;
  $scope.alert = function() {
    alert('test')
  }
});

app.controller('EpisodeCtrl', function($scope, $routeParams) {
  $scope.episode = _.find(siteData.episodes, function (episode) {
    return(episode.id == $routeParams.episodeId)
  });
  $scope.getTemplateUrl = function (id) {
    var url = "partials/shownotes/shownotes." + id + ".html";
    return(url);
  };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.tpl.html'
      }).
      when('/episodes/:episodeId', {
        templateUrl: 'partials/episode.tpl.html'
      }).
      when('/index', {
        templateUrl: 'partials/index.html'
      }).
      otherwise({
        redirectTo: '/index'
      });
}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
