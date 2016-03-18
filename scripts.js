var moves = 0;
var wins = 0;
var games = 0;
var cards = [

"<img src='img/monsters-01.jpeg'>",
"<img src='img/monsters-02.jpeg'>",
"<img src='img/monsters-03.jpeg'>",
"<img src='img/monsters-04.jpeg'>",
"<img src='img/monsters-05.jpeg'>",
"<img src='img/monsters-06.jpeg'>",
"<img src='img/monsters-07.jpeg'>",
"<img src='img/monsters-08.jpeg'>",
"<img src='img/monsters-09.jpeg'>",
"<img src='img/monsters-11.jpeg'>",
"<img src='img/monsters-13.jpeg'>",
"<img src='img/monsters-14.jpeg'>",
"<img src='img/monsters-15.jpeg'>",
"<img src='img/monsters-16.jpeg'>" 
];

var gridSize;
var gameTiles;
var gridArray;
var rowSize;

$(document).ready(function() {

    $("input").click(function() {
        var diff = $(this).val();
        if (diff == "easy"){
            rowSize = 5;
            gridSize = rowSize * 2;
        }else if(diff == "medium"){
            rowSize = 5;
            gridSize = rowSize * 4;
        }else if(diff == "hard"){
            rowSize = 7;
            gridSize = rowSize * 4;
        }
        $("#button-bucket").toggle();
        gameTiles = cards.slice(0, gridSize/2);
        gridArray = $.merge(gameTiles, gameTiles);


        //shuffle here
        //place here

        for (var i = 0; i < gridArray.length; i++){
            var html = '<div class ="mg-tile">';
                    html += '<div class="mg-tile-inner unmatched flipped">';
                        html += '<div class="mg-tile-outside"></div>';
                        html += "<div class='mg-tile-inside'>" + gridArray[i] + '</div>';
                    html += '</div>';
                html += '</div>';
                $("#mg-contents").append(html);

        }
        setTimeout(function(){
            $('.mg-tile-inner').removeClass('flipped')
        },2000);
        $('.mg-tile').click

        
    });



});