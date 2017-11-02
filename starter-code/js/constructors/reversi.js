// Constructor for the Reversi objects.
// A reversi object has the following properties:
// - difficulty - The difficulty of the game selected by the user
// - board - A new instance of board object.
// - turn - The player who begins, always player 2 (black tokens)

function Reversi(type) {
  this.difficulty = type;
  this.game = new Board(type);
  this.turn = "player2"; // Black tokens
  this.scoreP1 = 0;
  this.scoreP2 = 0;
};

Reversi.prototype.newGame = function() {
  this.game.inicialize();
};

Reversi.prototype.turnChange = function() {
  if (this.turn === "player2") {
    this.turn = "player1";
  } else {
    this.turn = "player2";
  }
};

Reversi.prototype.checkLegalMovement = function(x, y, mov) {
  var turn = this.turn;
  switch (mov) {
    case ("top"):
      if (((turn === "player2") && (this.game.board[y - 1][x].player === 1)) ||
        ((turn === "player1") && (this.game.board[y - 1][x].player === 2))) {
        return true;
      }
      break;
    case ("bottom"):
      if (((turn === "player2") && (this.game.board[y + 1][x].player === 1)) ||
        ((turn === "player1") && (this.game.board[y + 1][x].player === 2))) {
        return true;
      }
      break;
    case ("right"):
      if (((turn === "player2") && (this.game.board[y][x + 1].player === 1)) ||
        ((turn === "player1") && (this.game.board[y][x + 1].player === 2))) {
        return true;
      }
      break;
    case ("left"):
      if (((turn === "player2") && (this.game.board[y][x - 1].player === 1)) ||
        ((turn === "player1") && (this.game.board[y][x - 1].player === 2))) {
        return true;
      }
      break;
    case ("topLeft"):
      if (((turn === "player2") && (this.game.board[y - 1][x - 1].player === 1)) ||
        ((turn === "player1") && (this.game.board[y - 1][x - 1].player === 2))) {
        return true;
      }
      break;
    case ("topRight"):
      if (((turn === "player2") && (this.game.board[y - 1][x + 1].player === 1)) ||
        ((turn === "player1") && (this.game.board[y - 1][x + 1].player === 2))) {
        return true;
      }
      break;
    case ("bottomLeft"):
      if (((turn === "player2") && (this.game.board[y + 1][x - 1].player === 1)) ||
        ((turn === "player1") && (this.game.board[y + 1][x - 1].player === 2))) {
        return true;
      }
      break;
    case ("bottomRight"):
      if (((turn === "player2") && (this.game.board[y + 1][x + 1].player === 1)) ||
        ((turn === "player1") && (this.game.board[y + 1][x + 1].player === 2))) {
        return true;
      }
      break;
    default:
      return false;
      break;
  }
};

Reversi.prototype.checkTokensTop = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((y > 0) && (checking)) {
      if (this.checkLegalMovement(x, y, "top")) {
        count++;
        y--;
      } else {
        checking = false;
      }
    }
    if (y === 0 || this.game.board[y - 1][x].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensTop = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y - i][x].player = 2;
    } else {
      this.game.board[y - i][x].player = 1;
    }
  }
};

Reversi.prototype.checkTokensBottom = function(x, y) {
  var dir = "bottom";
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((y < this.game.height-1) && (checking)) {
      if (this.checkLegalMovement(x, y, dir)) {
        count++;
        y++;
      } else {
        checking = false;
      }
    }
    if (y === this.game.height-1 || this.game.board[y + 1][x].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensBottom = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y + i][x].player = 2;
    } else {
      this.game.board[y + i][x].player = 1;
    }
  }
};

Reversi.prototype.checkTokensLeft = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {

    while ((x > 0) && (checking)) {
      if (this.checkLegalMovement(x, y, "left")) {
        count++;
        x--;
      } else {
        checking = false;
      }
    }
    if (x === 0 || this.game.board[y][x - 1].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensLeft = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y][x - i].player = 2;
    } else {
      this.game.board[y][x - i].player = 1;
    }
  }
};

Reversi.prototype.checkTokensRight = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((x < this.game.width-1) && (checking)) {
      if (this.checkLegalMovement(x, y, "right")) {
        count++;
        x++;
      } else {
        checking = false;
      }
    }
    if (x === this.game.width-1 || this.game.board[y][x + 1].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensRight = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y][x + i].player = 2;
    } else {
      this.game.board[y][x + i].player = 1;
    }
  }
};

Reversi.prototype.checkTokensTopRight = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((y > 0) && (x < this.game.width-1) && (checking)) {
      if (this.checkLegalMovement(x, y, "topRight")) {
        count++;
        y--;
        x++;
      } else {
        checking = false;
      }
    }
    if ((x === this.game.width-1 || y === 0) || this.game.board[y - 1][x + 1].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensTopRight = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y - i][x + i].player = 2;
    } else {
      this.game.board[y - i][x + i].player = 1;
    }
  }
};

Reversi.prototype.checkTokensBottomRight = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((y < this.game.height-1) && (x < this.game.width-1) && (checking)) {
      if (this.checkLegalMovement(x, y, "bottomRight")) {
        count++;
        y++;
        x++;
      } else {
        checking = false;
      }
    }
    if ((x === this.game.width-1 || y === this.game.height-1) || this.game.board[y + 1][x + 1].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensBottomRight = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y + i][x + i].player = 2;
    } else {
      this.game.board[y + i][x + i].player = 1;
    }
  }
};

Reversi.prototype.checkTokensTopLeft = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((y > 0) && (x > 0) && (checking)) {
      if (this.checkLegalMovement(x, y, "topLeft")) {
        count++;
        y--;
        x--;
      } else {
        checking = false;
      }
    }
    if ((x === 0 || y === 0) || this.game.board[y - 1][x - 1].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensTopLeft = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y - i][x - i].player = 2;
    } else {
      this.game.board[y - i][x - i].player = 1;
    }
  }
};

Reversi.prototype.checkTokensBottomLeft = function(x, y) {
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  if (this.game.board[y][x].player === 0) {
    while ((y < this.game.height-1) && (x > 0) && (checking)) {
      if (this.checkLegalMovement(x, y, "bottomLeft")) {
        count++;
        y++;
        x--;
      } else {
        checking = false;
      }
    }
    if ((x === 0 || y === this.game.height-1) || this.game.board[y + 1][x - 1].player === 0) {
      count = 0;
    }
  }
  return count;
};

Reversi.prototype.changeTokensBottomLeft = function(x, y, num) {
  for (var i = 0; i <= num; i++) {
    if (this.turn === "player2") {
      this.game.board[y + i][x - i].player = 2;
    } else {
      this.game.board[y + i][x - i].player = 1;
    }
  }
};

Reversi.prototype.checkAndTurnTokens = function(x, y) {
  // Checking and changing tokens to the top.
  var top = this.checkTokensTop(x, y);
  if (top > 0) {
    this.changeTokensTop(x, y, top);
  }

  // Checking and changing tokens to the bottom.
  var bottom = this.checkTokensBottom(x, y);
  if (bottom > 0) {
    this.changeTokensBottom(x, y, bottom);
  }

  // Checking and changing tokens to the Left.
  var left = this.checkTokensLeft(x, y);
  if (left > 0) {
    this.changeTokensLeft(x, y, left);
  }

  // Checking and changing tokens to the right
  var right = this.checkTokensRight(x, y);
  if (right > 0) {
    this.changeTokensRight(x, y, right);
  }

  // Checking and changing tokens to the top right
  var topRight = this.checkTokensTopRight(x, y);
  if (topRight > 0) {
    this.changeTokensTopRight(x, y, topRight);
  }

  // Checking and changing tokens to the top left
  var topLeft = this.checkTokensTopLeft(x, y);
  if (topLeft > 0) {
    this.changeTokensTopLeft(x, y, topLeft);
  }

  // Checking and changing tokens to the bottom right
  var bottomRight = this.checkTokensBottomRight(x, y);
  if (bottomRight > 0) {
    this.changeTokensBottomRight(x, y, bottomRight);
  }

  // Checkinh and changing tokens to the bottom left
  var bottomLeft = this.checkTokensBottomLeft(x, y);
  if (bottomLeft > 0) {
    this.changeTokensBottomLeft(x, y, bottomLeft);
  }
};

Reversi.prototype.countingTokens = function(){
  for (var i = 0; i < this.game.height; i++){
    for (var j = 0; j < this.game.width; j++){
      if (this.game.board[i][j].player === 1){
        this.scoreP1++;
      }
      if (this.game.board[i][j].player === 2){
        this.scoreP2++;
      }
    }
  }
};

Reversi.prototype.checkPossibleMovs = function() {
  var top, bottom, left, right, topRight, topLeft, bottomLeft, bottomRight;
  var x = 0, y = 0, total = 0;
  var mov = false;
  while (y < this.game.height && !mov){
    while (x < this.game.width && !mov) {
      top = this.checkTokensTop(x, y);
      bottom = this.checkTokensBottom(x, y);
      left = this.checkTokensLeft(x, y);
      right = this.checkTokensRight(x, y);
      topRight = this.checkTokensTopRight(x, y);
      topLeft = this.checkTokensTopLeft(x, y);
      bottomRight = this.checkTokensBottomRight(x, y);
      bottomLeft = this.checkTokensBottomLeft(x, y);
      total= top + bottom + left + right + topRight + topLeft + bottomRight + bottomLeft;
      if (total > 0){mov = true;}
      else {x++;}
    }
    x = 0;
    y++;
  }
  return mov;
};

Reversi.prototype.checkEndGame = function(){
  var end;
  var freeBox = false;
  var x=0; y=0;
  while (y < this.game.height && !freeBox){
    while (x < this.game.width && !freeBox){
      if (this.game.board[y][x].player === 0){freeBox = true;}
      else{x++;}
    }
    x=0; y++;
  }
  var movsPlay1, movsPlay2;
  if (this.turn === "Player2"){
    movsPlay2 = this.checkPossibleMovs();
    this.turnChange();
    movsPlay1 = this.checkPossibleMovs();
    this.turnChange();
  }
  else {
    movsPlay1 = this.checkPossibleMovs();
    this.turnChange();
    movsPlay2 = this.checkPossibleMovs();
    this.turnChange();
  }
  end = (!freeBox || (!movsPlay1 && !movsPlay2));
  return end;
};
