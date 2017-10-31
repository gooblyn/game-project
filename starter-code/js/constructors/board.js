// Constructor for the objects type board.
// A board will have as property:
// - Board: An array of 8 positions with an array of 8 positions inside each one.
//          Each position will have an box object.


function Board(type) {
  switch (type) {
    case "easy":
      this.difficulty = "easy";
      this.width = 10;
      this.height = 10;
      this.board = [
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()]
      ];
      break;
    case "hard":
      this.difficulty = "hard";
      this.width = 6;
      this.height = 6;
      this.board = [
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box()]
      ];
      break;
    default:
      this.difficulty = "medium";
      this.width = 8;
      this.height = 8;
      this.board = [
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()],
        [new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box(), new Box()]
      ];
      break;
  };
};

Board.prototype.inicialize = function (){
  var width = this.width;
  var height = this.height;
  for (var i = 0; i < height; i++){
    for (var j = 0; j < width; j++) {
      this.board[i][j].x = j;
      this.board[i][j].y = i;
      // Inicialize player1 boxes - white ones
      if (((i == (height/2)-1) && (j == (width/2)-1)) ||
          ((i == height/2) && (j == width/2))){
            this.board[i][j].player = 1;
      }
      // Inicialize player2 boxes - black ones
      if (((i == (height/2)-1) && (j == width/2)) ||
          ((i == height/2) && (j == (width/2)-1))){
            this.board[i][j].player = 2;
      }
    }
  }
};
