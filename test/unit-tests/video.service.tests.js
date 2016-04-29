describe('VideoService',function(){

  beforeEach(inject(function($injector){
    //setup the mock http service responses
    $httpBackend = $injector.get('$httpBackend');

    var videosTest = [{videoId:}]
    requestHandler = $httpBackend.when('POST','http://192.168.0.4:9000/api/v1/search')
          .respond({});
  }));

  it('The videos must not be empty',function(){

  });


});
