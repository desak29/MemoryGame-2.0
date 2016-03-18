

var moves = 0;
var wins = 0;
var games = 0;
var gridSize;
var rowSize;
var gameTiles;
var gridArray;
var cards = [
    "<img src='img/monsters/monsters-01.png>",
    "<img src='img/monsters/monsters-02.png>",
    "<img src='img/monsters/monsters-03.png>",
    "<img src='img/monsters/monsters-04.png>",
    "<img src='img/monsters/monsters-05.png>",
    "<img src='img/monsters/monsters-06.png>",
    "<img src='img/monsters/monsters-07.png>",
    "<img src='img/monsters/monsters-08.png>",
    "<img src='img/monsters/monsters-09.png>",
    "<img src='img/monsters/monsters-10.png>",
    "<img src='img/monsters/monsters-11.png>",
    "<img src='img/monsters/monsters-12.png>",
    "<img src='img/monsters/monsters-13.png>",
    "<img src='img/monsters/monsters-14.png>",
    "<img src='img/monsters/monsters-15.png>",
    "<img src='img/monsters/monsters-16.png>",
];
$(document).ready(function() {
    $('input').click(function() {
        var diff = $(this).val();
        if (diff == 'easy') {
            rowsize = 5;
            gridSize = rowSize * 2;

        } else if (diff == 'medium') {
            rowsize = 5;
            gridSize = rowSize * 4;

        } else if (diff == 'hard') {
            rowsize = 7;
            gridSize = rowSize * 4;

        }
        $('#button-bucket').toggle();
        gameTiles = cards.slice(0, (gridSize / 2));
        gridArray = $.merge(gameTiles, gameTiles);
        // takes game tiles and concatanates game tiles into one array gridArray
        console.log(gridArray);
        // shuffle here
        for (i = 0; i < gridArray.length; i++) {
            var html = '<div class="mg-tile">';
            html += '<div class="mg-tile-inner unmatched flipped"></div>';
            html += '<div class="mg-tile-outside"></div>';
            '<div class="mg-tile-inside"></div>' + gridArray[i] + '</div>';
            html += '</div>';
            html += '</div>';
            $('#mg-contents').append(html);
            //    append html of pictures to the mg contents 
            // dont want to override html 
            // you can keep adding to this thing


        }
    });
})
