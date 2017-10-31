// Constructor for the Reversi objects.
// A reversi object has the following properties:
// - difficulty - The difficulty of the game selected by the user
// - board - A new instance of board object.
// - turn - The player who begins, always player 2 (black tokens)

function Reversi(type) {
  this.difficulty = type;
  this.board = new Board();
  this.turn = "player2"; // Black tokens
};

Reversi.prototype.newGame = function (){
  this.board.inicialize();
};

Reversi.prototype.turnChange = function (){
  if (this.turn == "player2"){
    this.turn = "player1";
  }
  else {
    this.turn = "player2";
  }
};

Reversi.prototype.checkTokensToTurn = function (board, turn){
  var top = checkTokensTop();
  var bottom = checkTokensBottom();
  var left = checkTokensLeft();
  var rigth = checkTokensRigth();
  var topRigth = checkTokensTopRigth();
  var topLeft = checkTokensTopLeft();
  var downRigth = checkTokensDownRigth();
  var downLeft = checkTokensDownLeft();
};
