function Barman (){
  this.positionY = 0;
  this.size = 75;
  this.service = false;
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
  
};

Barman.prototype.throw = function (){


};
