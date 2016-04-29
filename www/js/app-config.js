(function(){

  angular
    .module('toptal')
    .config(['$httpProvider','$sceDelegateProvider',config]);

  function config($httpProvider,$sceDelegateProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

  }
})();
