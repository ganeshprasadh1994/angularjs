angular.module('app9', [])
  .directive("jqlDirective", function() {
    return function(scope, element, attrs) {
      var players = element.children();
      var listOfPlayers = "";
      for(i = 0; i < players.length; i++){
        if(players.eq(i).text() == "Barry Allen"){
          players.eq(i).css("color", "red");
          players.eq(i).attr("number", "25");
        }
        if(players.eq(i).text() == "Shank Dorai"){
          players.eq(i).addClass("thick");
        }
        listOfPlayers += players.eq(i).text() + ", ";
      }
      angular.element(document.querySelector('#childrenList'))
        .text(listOfPlayers);
      var barrysNum = angular.element(document.querySelector('#barry'))
        .attr("number");
      angular.element(document.querySelector('#barrysNum'))
        .text(barrysNum);
      /*angular.element(document.querySelector('#shank'))
        .removeClass("thick");*/
    var isshankBold = angular.element(document.querySelector('#shank'))
        .hasClass("thick");

    var barryID = angular.element(document.querySelector('#barry'))
        .prop("id");
      angular.element(document.querySelector('#barryID'))
        .text(barryID);
      var isganyItalic=angular.element(document.querySelector('#gany'))
      .hasClass("italic");
      angular.element(document.querySelector("#ganyItalic"))
      .text(ganyItalic);
    }
  })
  .controller("mainCtrl", function($scope) {
    $scope.unBold = function() {
      angular.element(document.querySelector('#shank')).toggleClass("thick");
      angular.element(document.querySelector('#shankBold'))
          .text(isshankBold);
    }
})
