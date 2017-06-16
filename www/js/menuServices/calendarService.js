app.factory('calendarService', ['$http', function ($http) {

   var serviceBase = 'http://95.0.224.70/AsistanProjectAPI/api/Calendar';
    var calendarServiceFactory = {};


var _getAjanda = function () {
        return $http.get(serviceBase+'/GetAllajanda');
           
    };
     calendarServiceFactory.getAjanda = _getAjanda;
var _insertAjanda = function (data) {
        return $http.post(serviceBase+'/Postajanda',data);
           
    };  
  calendarServiceFactory.insertAjanda = _insertAjanda;

var _updateCalendar = function (todo) {
        return $http.put(serviceBase+'/Putajanda?' ,todo);
           
    };

  calendarServiceFactory.updateCalendar = _updateCalendar;
    return calendarServiceFactory;
 

}])
app.service('planService', function($http,$ionicPopup,$timeout){
         
this.showPopupPlan = function(titleplan,aciklamaplan,stimeplan,etimeplan) {
 var myPopup = $ionicPopup.show({

 template: '<b>Başlık</b>: '
    +titleplan 
    +'<br><br>'
    + '<b>Açıklama</b>:'
    + aciklamaplan+'<br><br>'
    + '<b>Başlangıç Zamanı</b>: '
    + stimeplan+'<br><br>'
    +'<b>Bitiş Zamanı</b>: '
    +etimeplan,
    title: 'Plan',
    buttons: [
      {
        text: '<b>Tamam</b>',
        type: 'button-calm',
        onTap: function(e) {  

}}]});

  $timeout(function() {
     myPopup.close(); 
  },10000);
 };


         });