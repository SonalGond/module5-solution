(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfos'];
function MyInfoController(myInfos) {
  var $myInfoCtrl = this;
  $myInfoCtrl.user = myInfos;
}

})();
