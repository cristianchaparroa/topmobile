(function(){
  'use strict';

  angular
        .module('toptal')
        .controller('ListController', ['videoService',ListController]);

  function ListController(videoService) {
    var vm = this;

    vm.videos = [];
    vm.topic  = 'Events';
    vm.playerVars = {
      rel: 0,
      showinfo: 0,
      modestbranding: 0,
    };

    loadVideos();

    function loadVideos() {
        return getVideos().then(function(){

          console.log('retrieven videos...' + vm.topic);
        });
    }

    function getVideos() {
      return videoService.getVideos(vm.topic).then(function(data){
        vm.videos  = data;
        return vm.videos;
      });
    }

    vm.search = function () {
      loadVideos();
    };
  }

})();
