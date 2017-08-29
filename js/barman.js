function Barman (){
  this.positionY = 0;
  this.size = 75;
  this.service = true;
}

Barman.prototype.movUp = function () {
  this.positionY = parseInt($('#barman').css('top'));
  if (this.positionY > 0) {
    this.positionY -= 75;
  }
  $('#barman').css('top', this.positionY + 'px');
};

Barman.prototype.movDown = function () {
  this.positionY = parseInt($('#barman').css('top'));
  if (this.positionY < 375) {
    this.positionY += 75;
  }
  $('#barman').css('top', this.positionY + 'px');
};

Barman.prototype.collect = function (){
  if (this.positionY == positionBeer && apto == true) {
    $(cerveza).css("visibility", "hidden");
    $('#barman img').css("visibility", "visible");
  }
};
