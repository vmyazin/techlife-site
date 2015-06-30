<section class="player" ng-show="isLoaded()" ng-controller="PlayerCtrl">
  <p>
    <control class="sm2-play" ng-click="play(episode)" ng-hide="isPlaying(episode)"><span class="control-icon">&#9654;</span></control>
    <control class="sm2-stop" ng-click="stop()" ng-show="isPlaying(episode)"><span class="control-icon">&#9613;&#9613;</span></control>
    <span>{{getCurrentSound('id')}}: {{getCurrentSound('title')}}</span>
  </p>
</section>
