function Barman (position){
  this.y = position;
  this.size = 75;
  this.service = false;
}

Barman.prototype.movUp = function () {
  if (this.y > 0) {this.y -= 75;}
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.movDown = function () {
  if (this.y < 375) {this.y += 75;}
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.collect = function (position){
  var positionLeft = parseInt($(position.identifier).css('left'));
  if (positionLeft> 300) {
    positionLeft = positionLeft -75;
  }
  $(position.identifier).css('left', positionLeft);
  this.service= true;
};

// Barman.prototype.throw = function (a){
//   console.log(a);
//   parseInt($(a.identifier).css('left'));
//   // if (positionT > 0) {
//   //   positionT = positionT - 10;
//   // }
//   // $(a.identifier).css('left', positionT);
//   //   this.service= false;
// };
