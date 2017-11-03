// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var reversiGame;

$(document).ready(function() {
  reversiGame = new Reversi("medium");
  reversiGame.newGame();
  paintingScoreAndTurn();
  var html = '';

  // For each item of the array, we create a div
  for (var i = 0; i < reversiGame.game.height; i++) {
    for (var j = 0; j < reversiGame.game.width; j++) {
      if (reversiGame.game.board[i][j].player === 1) {
        html += '<div class= "box" id="' + j + i + '">';
        html += '<div class="play1">';
        html += '</div>';
        html += '</div>';
      } else if (reversiGame.game.board[i][j].player === 2) {
        html += '<div class= "box" id="' + j + i + '">';
        html += '<div class="play2">';
        html += '</div>';
        html += '</div>';
      } else {
        html += '<div class= "box" id="' + j + i + '">';
        html += '<div class="empty">';
        html += '</div>';
        html += '</div>';
      }
    }
  }

  // Add all the divs to the HTML
  document.getElementById('board').innerHTML = html;

  // Function that update the board
  function updateBoard() {
    var pos, pos1;
    for (var i = 0; i < reversiGame.game.height; i++) {
      for (var j = 0; j < reversiGame.game.width; j++) {
        pos = reversiGame.game.board[j][i].x.toString() + reversiGame.game.board[j][i].y.toString();
        pos1 = '#' + pos;
        if (reversiGame.game.board[j][i].player === 1) {
          if ($(pos1).children().hasClass("play1")) {} else if ($(pos1).children().hasClass("play2")) {
            $(pos1).children().removeClass("play2");
            $(pos1).children().addClass("play1");
          } else {
            $(pos1).children().removeClass("empty");
            $(pos1).children().addClass("play1");
          }
        }
        if (reversiGame.game.board[j][i].player === 2) {
          if ($(pos1).children().hasClass("play2")) {} else if ($(pos1).children().hasClass("play1")) {
            $(pos1).children().removeClass("play1");
            $(pos1).children().addClass("play2");
          } else {
            $(pos1).children().removeClass("empty");
            $(pos1).children().addClass("play2");
          }
        }
      }
    }
  };

  function paintingScoreAndTurn() {
    reversiGame.countingTokens();
    $(".p1-num > p").text(reversiGame.scoreP1);
    $(".p2-num > p").text(reversiGame.scoreP2);
    $(".turn").text(reversiGame.turn);
  };

  $(".box").click(function() {
    // Taking the coordinates of the box clicked
    var pos = $(this).attr("id");
    var x = parseInt(pos.charAt(0));
    var y = parseInt(pos.charAt(1));
    var movs;
    // Checks and turning the tokens
    movs = reversiGame.checkAndTurnTokens(x, y);
    // Change the turn if the box selected change tokenss
    if (movs > 0) {
      reversiGame.turnChange();
    }
    // Checks if the neew player have movs
    var haveMovs = reversiGame.checkPossibleMovs();
    // If there are no movs, changes the turn
    if (!haveMovs) {
      reversiGame.turnChange();
    }
    // Checks if is the end of the game.
    var endGame = reversiGame.checkEndGame();
    if (endGame) {
      $("#game-over").removeClass("display");
    }
    // Paint all the elements of the board
    paintingScoreAndTurn();
    updateBoard();
  });
});
