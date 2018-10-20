(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $signUpCtrl = this;

  $signUpCtrl.submit = function() {
    if(!angular.isUndefined($signUpCtrl.user.favoriteDish) && $signUpCtrl.user.favoriteDish!== '') {
      $signUpCtrl.user.favoriteDish = $signUpCtrl.user.favoriteDish.toUpperCase();
    }
  MenuService.getFavoriteDish($signUpCtrl.user.favoriteDish).then(function (response) {
      $signUpCtrl.user.favDish = response.data;
      MenuService.setUserInfo($signUpCtrl.user);
      $signUpCtrl.success = true;
      $signUpCtrl.error = false;
    }, function (response) {
      $signUpCtrl.success = false;
      $signUpCtrl.error = true;
    });
  };
}

})();
