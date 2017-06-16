angular.module('starter.services', [])
.factory('PopupService', function($ionicPopup){
  return {
    alert: function(title, template, buttons)
    {
      var config = {
        title: title,
        template: template,
        buttons: [{
          text: 'Tamam',
          type: 'button-calm'
        }]
      }

      if(buttons != undefined) config.buttons = buttons;

      return $ionicPopup.alert(config);
    },
    confirm: function(title, template, buttons)
    {
      var config = {
        title: title,
        template: template,
        buttons: [{ text : 'Tamam', type: 'button-calm' }]
      };
      if(buttons != undefined) config.buttons = buttons;
      return $ionicPopup.confirm(config);
    }

  }
});


