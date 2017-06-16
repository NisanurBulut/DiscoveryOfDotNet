app.factory('networkService',function ($rootScope, $cordovaNetwork) {
 var networkServicefactory = {};
 
    var _isOnline= function(){
      if(ionic.Platform.isWebView()){
        return $cordovaNetwork.isOnline();    
      } else {
        return navigator.onLine;
      }
    };

    var _isOffline= function(){
      if(ionic.Platform.isWebView()){
        return !$cordovaNetwork.isOnline();    
      } else {
        return !navigator.onLine;
      }
    };
    var _startWatching= function(){
        if(ionic.Platform.isWebView()){
 
          $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            alert("went online");
          });
 
          $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
            alert("went offline");
          });
 
        }
        else {
          window.addEventListener("online", function(e) {
           alert("went online");
          }, false);    
 
          window.addEventListener("offline", function(e) {
            alert("went offline");
          }, false);  
        }       
    }
  

    networkServicefactory.isOnline = _isOnline;
    networkServicefactory.isOffline = _isOffline;
    networkServicefactory.startWatching = _startWatching;

return networkServicefactory;


});