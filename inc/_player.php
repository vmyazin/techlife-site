<section class="player" ng-show="isLoaded()" ng-controller="PlayerCtrl">
  <div>
    <p>
      <control class="sm2-play" ng-click="play()" ng-hide="isPlaying()">&#9654;</control>
      <control class="sm2-stop" ng-click="stop()" ng-show="isPlaying()">&#9613;&#9613;</control>
      <span>{{getCurrentSound('id')}}: {{getCurrentSound('title')}}</span>
    </p>
  </div>
</section>
