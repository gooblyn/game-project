// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var reversiGame;

$(document).ready(function(){
  reversiGame = new Reversi("medium");
  reversiGame.newGame();
  var html = '';

  // For each item of the array, we create a div
  for (var i = 0; i < reversiGame.game.height; i++){
    for (var j = 0; j < reversiGame.game.width; j++){
      if (reversiGame.game.board[i][j].player === 1){
            html += '<div class= "box" id="' + j + i + '">';
            html += '<div class="play1">';
            html += '</div>';
            html += '</div>';
      }
      else if (reversiGame.game.board[i][j].player === 2){
            html += '<div class= "box" id="' + j + i + '">';
            html += '<div class="play2">';
            html += '</div>';
            html += '</div>';
      }
      else{
      html += '<div class= "box" id="' + j + i + '">';
      html += '<div class="empty">';
      html += '</div>';
      html += '</div>';}
    }
  }

  // Add all the divs to the HTML
  document.getElementById('board').innerHTML = html;

  // Function that update the board
  function updateBoard() {
    var pos, pos1;
    for (var i=0; i < reversiGame.game.height; i++){
      for (var j=0; j < reversiGame.game.width; j++){
        pos = reversiGame.game.board[j][i].x.toString() + reversiGame.game.board[j][i].y.toString();
        pos1 = '#'+pos;
        if(reversiGame.game.board[j][i].player === 1){
          if($(pos1).children().hasClass("play1")){
            console.log("tengo hijo p1 "+pos);
          }
          else if ($(pos1).children().hasClass("play2")){
            $(pos1).children().removeClass("play2");
            $(pos1).children().addClass("play1");
          }
          else{
            $(pos1).children().removeClass("empty");
            $(pos1).children().addClass("play1");
          }
        }
        if(reversiGame.game.board[j][i].player === 2){
          if($(pos1).children().hasClass("play2")){
            console.log("tengo hijo p2 "+pos);
          }
          else if ($(pos1).children().hasClass("play1")){
            $(pos1).children().removeClass("play1");
            $(pos1).children().addClass("play2");
          }
          else{
            $(pos1).children().removeClass("empty");
            $(pos1).children().addClass("play2");
          }
        }



      }
    }
  };

  $(".box").click(function(){
    console.log(reversiGame.turn);
    var pos = $(this).attr("id");
    var x = parseInt(pos.charAt(0));
    var y = parseInt(pos.charAt(1));
    reversiGame.checkAndTurnTokens(x,y);
    reversiGame.countingTokens();
    console.log("Player 1 score: "+reversiGame.scoreP1);
    console.log("Player 2 score: "+reversiGame.scoreP2);
    reversiGame.turnChange();
    console.log(reversiGame.turn);
    var haveMovs = reversiGame.checkPossibleMovs();
    console.log(haveMovs);
    if (!haveMovs){
      reversiGame.turnChange();
      console.log(reversiGame.turn);
    }
    var endGame = reversiGame.checkEndGame();
    console.log(endGame);
    updateBoard();
  });
});
