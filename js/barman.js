function Barman (){
  this.y = 0;
  this.size = 75;
  this.service = false;
}

Barman.prototype.movUp = function () {
  this.positionY = parseInt($('#barman').css('top'));
  if (this.y > 0) {
    this.y -= 75;
  }
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.movDown = function () {
  this.positionY = parseInt($('#barman').css('top'));
  if (this.y < 375) {
    this.y += 75;
  }
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.collect = function (){

};

Barman.prototype.throw = function (){


};
