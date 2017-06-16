app.controller('CalendarCtrl', function ($scope,planService, networkService,$ionicLoading,calendarService, $filter,$ionicPopup, $timeout,PopupService) {
    'use strict';
   
  $scope.calendar = {};



 networkService.startWatching();
  $scope.showPopup = function() {
   $scope.data = {}

   var myPopup = $ionicPopup.show({
    template:'<div class="list"><label class="item item-input"><input type="text" placeholder="Başlık" ng-model="data.title"></label><label class="item item-input"><input type="text" placeholder="Açıklama" ng-model="data.description"></label></div>'+
    '<div class="item ion-ios-calendar-outline" ion-datetime-picker seconds ng-model="data.startTime">{{data.startTime| date: "yyyy-MM-dd H:mm:ss"}}</div>'+
    '<div class="item ion-ios-calendar-outline" ion-datetime-picker seconds ng-model="data.endTime">{{data.endTime| date: "yyyy-MM-dd H:mm:ss"}}</div>',
     title: '<b>Plan</b>',
     subTitle: '<b>Zaman Seçimi</b>',
     scope: $scope,
     buttons: [
       { text: 'İptal' },
       {
         text: '<b>Kaydet</b>',
         type: 'button-calm',
         onTap: function(e) {
         if($scope.data.title!=undefined && $scope.data.description!=undefined && $scope.data.startTime!=undefined && $scope.data.endTime ){//if scope
       if($scope.data.startTime>$scope.data.endTime)
          {
                PopupService.alert("HATA","Planın Başlangıç Zamanı Tamamlanma Zamanından Önce Olamaz");
                $scope.data.startTime=undefined;
                $scope.data.endTime=undefined;
                e.preventDefault();//hata varsa dahı dogru verılerın ılgılı yerlerde kalmasını sagladık
          }
          else
          {  calendarService.insertAjanda($scope.data)//kaydet dedıgı anda apiye post edılme yaı
            .success(function (response) { 
                console.log("Success");         
  
            }, function(error) {
             console.log("error");
            });}
    

           }//if-end scope
           else
           {
            
          PopupService.alert('','Boş Alanları Doldurunuz');
          e.preventDefault();
           }
         }
       },
     ]
   });

 myPopup.then(function(res) {
   
   });


  };
        $scope.changeMode = function (mode) {
            $scope.calendar.mode = mode;
        };

     $scope.onEventSelected = function (event) {
   var _dstime = $filter('date')(event.startTime, "yyyy-MM-dd H:mm");
    var _detime = $filter('date')(event.endTime, "yyyy-MM-dd H:mm");  
 planService.showPopupPlan(event.title, event.description, _dstime,_detime);




        };



        $scope.onViewTitleChanged = function (title) {
            $scope.viewTitle = title;
        };




 $scope.onTouchEvent = function (event) {//uzun basılan olayın sılınmesı
var confirmPopup = $ionicPopup.confirm({
     title: 'Plan Siliniyor',
     template: 'Planın Silinmesini istediğinizden Emin Misiniz?',
     buttons:[
      { text: 'İPTAL' },
      {
        text: '<b>EVET</b>',
        type: 'button-calm',
        onTap: function(e) {
          calendarService.updateCalendar(event)

            .success(function (response) { 
                console.log("Success"); 
            }, function(error) {
             console.log("error");
            });
              console.log('silindi');
        }}]

      });
}

        $scope.today = function () {
            $scope.calendar.currentDate = new Date();
        };

        $scope.isToday = function () {
            var today = new Date(),
                currentCalendarDate = new Date($scope.calendar.currentDate);

            today.setHours(0, 0, 0, 0);
            currentCalendarDate.setHours(0, 0, 0, 0);
            return today.getTime() === currentCalendarDate.getTime();
        };
    
        $scope.onTimeSelected = function (selectedTime, events) {
            console.log('Selected time: ' + selectedTime );
  
        };

    $scope.loadEvents = function () {
        $ionicLoading.show({
            template: '<ion-spinner icon="android" style="background:"white"></ion-spinner><br>'
        });
        var events = [];
        var results = [];
        calendarService.getAjanda()
            .success(function (result) {
                results = result;
                console.log("Results :", results);
                angular.forEach(results, function (event) {
                    console.log("Foreach girisi");
                    var stime = new Date("" + event.startTime);
                    var etime = new Date("" + event.endTime);
                    console.log("Girdi");
                    events.push({
                        title: event.title,
                        description: event.description,
                        startTime: stime,
                        endTime: etime,
                        allDay: event.allDay
                    });
                    $scope.calendar.eventSource = events;
                });
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                console.log("error");
            });


    };
 });
  
