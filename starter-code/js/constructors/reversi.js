// Constructor for the Reversi objects.
// A reversi object has the following properties:
// - difficulty - The difficulty of the game selected by the user
// - board - A new instance of board object.
// - turn - The player who begins, always player 2 (black tokens)

function Reversi(type) {
  this.difficulty = type;
  this.game = new Board(type);
  this.turn = "player2"; // Black tokens
};

Reversi.prototype.newGame = function (){
  this.game.inicialize();
};

Reversi.prototype.turnChange = function (){
  if (this.turn === "player2"){
    this.turn = "player1";
  }
  else {
    this.turn = "player2";
  }
};

Reversi.prototype.checkLegalMovement = function (x, y, mov){
  var turn = this.turn;
  switch (mov){
      case ("top"):
      if (((this.turn === "player2")&&(this.game.board[y-1][x].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y-1][x].player === 2))){
            return true;
      }
      break;
      case ("bottom"):
      if (((this.turn === "player2")&&(this.game.board[y+1][x].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y+1][x].player === 2))){
            return true;
      }
      break;
      case ("right"):
      if (((this.turn === "player2")&&(this.game.board[y][x+1].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y][x+1].player === 2))){
            return true;
      }
      break;
      case ("left"):
      if (((this.turn === "player2")&&(this.game.board[y][x-1].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y][x-1].player === 2))){
            return true;
      }
      break;
      case ("topLeft"):
      if (((this.turn === "player2")&&(this.game.board[y-1][x-1].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y-1][x-1].player === 2))){
            return true;
      }
      break;
      case ("topRight"):
      if (((this.turn === "player2")&&(this.game.board[y-1][x+1].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y-1][x+1].player === 2))){
            return true;
      }
      break;
      case ("bottomLeft"):
      if (((this.turn === "player2")&&(this.game.board[y+1][x-1].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y+1][x-1].player === 2))){
            return true;
      }
      break;
      default:
      if (((this.turn === "player2")&&(this.game.board[y+1][x+1].player === 1))||
          ((this.turn === "player1")&&(this.game.board[y+1][x+1].player === 2))){
            return true;
      }
      break;
  }
};

Reversi.prototype.checkTokensToTurn = function (x,y){
  /*var x = box.x;
  var y = box.y;*/
  var top = this.checkTokensTop(x, y);
  var bottom = this.checkTokensBottom(x, y);
  var left = this.checkTokensLeft(x, y);
  var right = this.checkTokensRight(x, y);
  var topRight = this.checkTokensTopRight(x, y);
  var topLeft = this.checkTokensTopLeft(x, y);
  var downRight = this.checkTokensBottomRight(x, y);
  var downLeft = this.checkTokensBottomLeft(x, y);
  return top + bottom + left + right + topRight + topLeft + downRight + downLeft;
};

Reversi.prototype.checkTokensTop = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((y > 0) && (checking)){
    if (this.checkLegalMovement(x, y, "top")){
      count++;
      y--;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensBottom = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((y < this.game.height) && (checking)){
    if (this.checkLegalMovement(x, y, "bottom")){
      count++;
      y++;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensLeft = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((x > 0) && (checking)){
    if (this.checkLegalMovement(x, y, "left")){
      count++;
      x--;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensRight = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((x < this.game.width) && (checking)){
    if (this.checkLegalMovement(x, y, "right")){
      count++;
      x++;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensTopRight = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((y > 0) && (x < this.game.width) && (checking)){
    if (this.checkLegalMovement(x, y, "topRight")){
      count++;
      y--;
      x++;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensBottomRight = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((y < this.game.height) && (x < this.game.width) && (checking)){
    if (this.checkLegalMovement(x, y, "bottomRight")){
      count++;
      y++;
      x++;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensTopLeft = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((y > 0) && (x>0) && (checking)){
    if (this.checkLegalMovement(x, y, "topLeft")){
      count++;
      y--;
      x--;
    }
    else {
      checking = false;
    }
  }
  return count;
};

Reversi.prototype.checkTokensBottomLeft = function (x, y){
  var count = 0; // For counting the tokens you will turn
  var checking = true; //For knowing if you have to continue checking the boxes
  while ((y < this.game.height) && (x > 0) && (checking)){
    if (this.checkLegalMovement(x, y, "bottomLeft")){
      count++;
      y++;
      x--;
    }
    else {
      checking = false;
    }
  }
  return count;
};
