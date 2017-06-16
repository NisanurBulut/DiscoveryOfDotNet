app.controller('LoginCtrl', function($scope, 
 $ionicPopup, $state,$ionicLoading, $location, authService,PopupService,$ionicHistory) {
    $scope.data = {};



    $scope.login = function() {
        if($scope.data.username==undefined && $scope.data.password!=undefined)
            PopupService.alert('Kullanıcı Adı Girilmesi!','<center>Kullanıcı Adını Eksiksiz Giriniz.</center>');
         
          if($scope.data.password==undefined && $scope.data.username!=undefined)
           PopupService.alert('Şifrenizi Boş Bırakamazsınız!','<center>Şifrenizi Eksiksiz Giriniz.</center>');
          if($scope.data.password==undefined && $scope.data.username==undefined){
           PopupService.alert('Boş Alanları Doldurunuz!','<center>Oturum Açmak İçin Gereken Bilgilerinizi Giriniz</center>');  
 }
 if($scope.data.password!=undefined && $scope.data.username!=undefined){//else scope

       $ionicLoading.show({
        template: '<ion-spinner class="white"></ion-spinner><br style="background:#ffffff;">Sisteme Giriş Yapılıyor</br>'
      });

    authService.login($scope.data)
    .then(function(result){
  $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.dash', {}, {location: "replace", reload: true});
      $ionicLoading.hide();  

    }, function(err){
      $ionicLoading.hide();
      PopupService.alert('Hatalı Giriş!','<center>Bilgilerinizin Doğru Olduğundan Emin Misiniz?</center>');
     
    });
  }

    }





   if (!authService.isAuthenticated()) {   //bu şart yeterli degıl
        if ($scope.data.username  !== undefined && $scope.data.password !== undefined) {
           $state.go('/login');
        }
   }
else
{

  $ionicHistory.nextViewOptions({
  disableAnimate: true,
  disableBack: true
});
$state.go('tab.dash', {}, {location: "replace", reload: true});

}

})
.controller('SideMenusSimpleCtrl', function ($scope, $location, authService,$ionicHistory, $state) {

    $scope.logOut = function () {
        authService.logOut();
           $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('login', {}, {location: "replace", reload: true});
        
    }

    $scope.authentication = authService.authentication;

});