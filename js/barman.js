function Barman (y){
  this.positionY = 0;
  this.size = 75;
  this.service = true;
}

Barman.prototype.movUp = function () {

  this.positionY = parseInt($('#barman').css('top'));
  //console.log(this.positionY);

  if (this.positionY > 0) {
    this.positionY -= 5;
  }
  console.log(this.positionY);
  $('#barman').css('top', this.positionY + 'px');

};

Barman.prototype.movDown = function () {

  this.positionY = parseInt($('#barman').css('top'));
  //console.log(this.positionY);

  if (this.positionY < 425) {
    this.positionY += 5;
  }
  console.log(this.positionY);
  $('#barman').css('top', this.positionY + 'px');

};

Barman.prototype.takeB = function () {

};

Barman.prototype.lanza = function () {

};
