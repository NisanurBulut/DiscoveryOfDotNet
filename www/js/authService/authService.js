
app.factory('authService', ['$http', '$q', 'localStorageService', 
    function ($http, $q, localStorageService) {
 
     var serviceBase = 'http://localhost:50493/';
    var authServiceFactory = {};
 
    var _authentication = {
        isAuth: false,
        userName : ""
    };
 

    var _login = function (loginData) {
 
        var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;
 
        var deferred = $q.defer();
 
        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
 
            localStorageService.set('authorizationData', { token: response.access_token, username: loginData.userName });
 
            _authentication.isAuth = true;
            _authentication.userName = loginData.username;
             
 
            deferred.resolve(response);
 
        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });
 
        return deferred.promise;
 
    };
 
    var _logOut = function () {
 
        localStorageService.remove('authorizationData');
 
        _authentication.isAuth = false;
        _authentication.userName = "";
        console.log("çıkış");
 
    };
    var _isAuthenticated=function()
    {
      return ((localStorageService.get('authorizationData') == null) ? false : true);
    };
    var _fillAuthData = function () {
 
        var authData = localStorageService.get('authorizationData');
        if (authData)
        {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
               
        }
 
    }
 

    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;
 authServiceFactory.isAuthenticated=_isAuthenticated;
    return authServiceFactory;
}]);
