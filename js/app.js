window.currentEpisode = {};
window.isLoaded = false;
window.isPlaying = false;


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

app.controller('PlayerCtrl', function($scope) {
  $scope.getCurrentSound = function (key) {
    return window.currentEpisode[key];
  }
  $scope.isPlaying = function (episode) {
    if(typeof episode !== 'undefined') {
      console.log("Yo bitches", episode, ((window.isPlaying==true)&&(window.currentEpisode.id === episode.id)));
      return((window.isPlaying==true)&&(window.currentEpisode.id === episode.id));
    } else {
      return window.isPlaying;
    }
  }
  $scope.isLoaded = function () {
    return window.isLoaded;
  }
  $scope.play = function(episode) {
    if ((_.isObject(episode) && episode.id != window.currentEpisode.id)
    || (typeof currentEpisode.id === 'undefined')) {
      InitPlayer(episode, function () {
        window.isLoaded = true;
        window.isPlaying = true;
        Player.play();
        $scope.$apply();
      });
    } else {
      window.isLoaded = true;
      window.isPlaying = true;
      Player.play();
    }
  }
  $scope.stop = function() {
    Player.pause();
    window.isPlaying = false;
  }
});

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
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
      when('/', {
        templateUrl: 'partials/index.html'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});


soundManager.setup({
  url: 'js/vendor/soundmanager2.swf',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  preferFlash: false,
  onready: function() {
    // Ready to use; soundManager.createSound() etc. can now be called.
  }
});

var LoadFile = function (fileName) {
  Player.load({
    id: 'episodeAudio',
    url: fileName
  });
}

var InitPlayer = function (episode, callback) {
  window.currentEpisode = episode;
  if (typeof Player !== 'undefined') soundManager.destroySound('episodeAudio');
  window.Player = soundManager.createSound({
    id: 'episodeAudio',
    url: episode.file,
    autoLoad: true,
    autoPlay: false,
    onload: function() {
      if (_.isFunction(callback)) callback()
    },
    volume: 80
  });
}
