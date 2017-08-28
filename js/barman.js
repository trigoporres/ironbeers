function Barman (){

  this.size = 75;
  this.service = true;

  this.barman = {
    row: 0,
    col: 6,
    dir: 0 // 0:up, 1: down,
  };

}


Barman.prototype.movUp = function (){
  if (this.barman.row > 0) {
    console.log(this.barman.row = this.barman.row - 1);
  }
};

Barman.prototype.movDown = function (){
  if (this.barman.row < 6) {
    console.log(this.barman.row = this.barman.row + 1);
  }
};


Barman.prototype.takeB = function () {

};

Barman.prototype.lanza = function () {

};
