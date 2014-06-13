angular.module('ParseServices', [])

.factory('ExtendParseSDK', ['ParseAbstractService', function(ParseAbstractService) {
  // 在被 inject 到 app.js 的 run 的時候，會執行這段擴充，所以當 injection 之後，不用多做什麼，Parse 就擴充完了。

  Parse.Object.extendAngular = function(options) {
    return ParseAbstractService.EnhanceObject(Parse.Object.extend(options));
  };

  Parse.Collection.extendAngular = function(options) {
    return ParseAbstractService.EnhanceCollection(Parse.Collection.extend(options));
  };

}])

.factory('ParseSDK', function() {

  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  // 在被 inject 到 app.js 的 run 的時候，會執行這段初始化，所以當 injection 之後，不用多做什麼，Parse 就初始化完了。
  Parse.initialize("oInJV2JlcXR96EN0SQjee0n5FlRUAd0joyFXReve", "OOZa6rsbkIiRWyiNlmHVMgMIHAyTqPdHRg7N1PxO");

  // FACEBOOK init
  window.fbPromise.then(function() {

    Parse.FacebookUtils.init({

      // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
      appId: 481650395275919, // Facebook App ID
      channelUrl: 'http://brandid.github.io/parse-angular-demo/channel.html', // Channel File
      cookie: true, // enable cookies to allow Parse to access the session
      xfbml: true, // parse XFBML
      frictionlessRequests: true // recommended

    });

  });

});
