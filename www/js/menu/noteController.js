app.controller('noteController',
  function ($scope, $ionicPopup,ChecklistService,networkService,PopupService,$ionicModal,$ionicSideMenuDelegate, $ionicLoading) {
    $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
    $scope.todos = [];

    getCheckList();
     $ionicLoading.show({
        template: '<ion-spinner icon="android" style="background:"white"></ion-spinner><br>'
      });

     networkService.startWatching();
     

    function getCheckList() {
        ChecklistService.getCheckList()
            .then(function (result) {
                $scope.todos = result.data;
                    console.log("Success");
                     $ionicLoading.hide();
            }, function (error) {
               console.log("error");
                $ionicLoading.hide();
             
            });
    }




  
   $scope.NewNoteshow = function() {
  $scope.todos={}; 

   var myPopup = $ionicPopup.show({
    template:'<div class="list"><label class="item item-input"><input type="text" placeholder="Not Ekle" ng-model="todos.Note"></div>',
     title: '<b>Not</b>',
     subTitle: '<b>Not Ekle</b>',
      scope: $scope,
     buttons: [
       { text: 'İptal' },
       {
         text: '<b>Kaydet</b>',
         type: 'button-calm',

         onTap: function(e) {
        
           if($scope.todos.Note!=undefined)  {
           ChecklistService.insertCheckList($scope.todos)
            .success(function (response) { 
                console.log("Success");
                $scope.todoNote=undefined;
               
              window.location.reload();//apiden dondugumuzde sayfanın yenılenmesı ıcın
             

            }, function(error) {
             console.log("error");
            });
    }//if-end scope
           else
           {
           PopupService.alert('','Boş Alanları Doldurunuz !');
             e.preventDefault();
        
           }
         }
       },
     ]
   });
  
  };
               $scope.selected = [];

        $scope.toggle = function (todo) {//click olayını tutar
            var idx = $scope.selected.indexOf(todo);
            if (idx > -1)
            {
              $scope.selected.splice(idx, 1);
            }
                
            else
            {
                $scope.selected.push(todo);
            
           
                $scope.tdata=angular.toJson($scope.selected);
       
         ChecklistService.controlCheckList($scope.selected)
          .success(function (response) {
              console.log("Success");
              getCheckList();
          }, function (error) {
              console.log("error");
          });
}
        };
     

 $scope.showConfirm = function(todo) {
   $scope.oldTodos=[];
    $scope.oldTodos.push(todo);//tiklendi mi
   var confirmPopup = $ionicPopup.confirm({
     title: 'Not Siliniyor',
     template: 'Notun Silinmesini istediğinizden Emin Misiniz?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('silindi');
$scope.tdata=angular.toJson($scope.oldTodos);


ChecklistService.updateCheckList($scope.tdata)
          .success(function (response) {
              console.log("Success");
              getCheckList();
          }, function (error) {
              console.log("error");
          });
     } else {
       console.log('İptal Edildi');
     }
   });
 };



 
});