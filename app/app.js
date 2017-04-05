// Declare app level module which depends on views, and components
var app = angular
    .module('myApp', [
  'ngRoute'
  ])
    .controller(
        'EntryCtrl',
        function($scope, $location, $http) {
            $http.get('data/gamethreads.json').then(function(response){
              console.log(response.data);
                $scope.games=response.data;
            });
        }

    )
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/bilder',{templateUrl:"/BalticGaming/app/games.html"})
      .when('/impressum',{templateUrl:"/BalticGaming/app/impressum.html"})
      .when('/createthread',{templateUrl:"/BalticGaming/app/createthread.html"});
  }]);


function insertAtCaret(areaId, text) {
    var txtarea = document.getElementById(areaId);
    if (!txtarea) { return; }

    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false ) );
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        strPos = range.text.length;
    } else if (br == "ff") {
        strPos = txtarea.selectionStart;
    }

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var ieRange = document.selection.createRange();
        ieRange.moveStart ('character', -txtarea.value.length);
        ieRange.moveStart ('character', strPos);
        ieRange.moveEnd ('character', 0);
        ieRange.select();
    } else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }

    txtarea.scrollTop = scrollPos;
}

function ajaxSubmit(form){
    console.log(form);
    $.post('test.php', $(form).serialize(), function(result){displayData(JSON.parse(result))});
    console.log(result);
}

function displayData(list){
    $("#entries").empty();
    for(var i=0; i<list.length;i++){
        var newElement = $(" <div class='well'>"+
            "<div class='row'>"+
            "<div class='col-md-1 h1'>"+(i+1)+"</div>"+
            "<div class='col-md-11'>"+
            "<div class='row'>"+
            "<div class='col-md-11'>"+
            "<strong>"+list[i].name+"</strong> schrieb ..."+
            "</div>"+
            "<div class='col-md-1 text-right'>"+
            "<span class=\"label label-default\">"+list[i].timestamp+"</span>"+
            "</div>"+
            "</div>"+
            "<div class='row'>"+
            "<div class='col-md-12'>"+
            "<p>"+
            "<em>"+
            list[i].message +
            "</em>"+
            "</p>"+
            "</div>"+
            "</div>"+
            "<div class='row'>"+
            "<div class='col-md-12'>"+
            "Email: <a href='mailto:"+list[i].email+"'>"+list[i].email+"</a>"+
            "</div>"+
            "</div>"+

            "</div>"+

            "</div>"+
            "</div>");

        $("#entries").append(newElement);
    }
}


