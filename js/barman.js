function Barman (){
  this.positionY = ['0', '75', '150', '225', '300', '375'];
  this.size = 75;
  this.service = true;
}

Barman.prototype.movUp = function (){
  var up = 0;
  this.positionYini = parseInt($('#barman').css('top'));

    for (var i = 0; i < this.positionY.length; i++) {
      if (this.positionY[i] > 0 && this.positionYini == this.positionY[i]) {
        up = this.positionY[i-1];
      }
    }

  $('#barman').css('top', up + 'px');

};

Barman.prototype.movDown = function (){
  var down = 0;
  this.positionYini = parseInt($('#barman').css('top'));

    for (var i = 0; i < this.positionY.length; i++) {
      if (this.positionY[i] < 410 && this.positionYini == this.positionY[i]) {
        down = this.positionY[i+1];
      }
    }

  $('#barman').css('top', down + 'px');
};

Barman.prototype.takeB = function () {

};

Barman.prototype.lanza = function () {

};
