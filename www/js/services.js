(function(){
  'use strict';

  angular.module('toptal')
        .factory('videoService', ['$http',videoService]);

  function videoService ($http) {

    var result;
    var service = {
        getVideos: getVideos,
        result: result
    };
    return service;

    function getVideos(topic) {
          var data = {
            'lat': '4.632714',
            'lng': '-74.067295',
            'term': topic
          };

          var request = {
              method: 'POST',
              url: api.getVideos,
              data: data,
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };

          return $http(request)
            .then(getVideosSuccess)
            .catch(getVideosFail);


          function getVideosSuccess(response) {
              return response.data;
          }

          function getVideosFail(err) {
              console.log('Error al realicar la peticion: '+JSON.stringify(err));
          }
    }

  }
})();
