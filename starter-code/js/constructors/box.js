// Constructor for the objects "box". Each box of the board could be just of
// one type: player1, player2 or empty. By default, every box will be empty.
// It has, also, two properties for saving its coordenates

function Box() {
  this.player1 = false;
  this.player2 = false;
  this.x = 0;
  this.y = 0;
};
