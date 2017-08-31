function Barman (){
  this.y = 0;
  this.size = 75;
  this.service = false;
}

Barman.prototype.movUp = function (beer) {
  this.y = parseInt($('#barman').css('top'));

  if (this.y > 0) {
    this.y -= 75;
  }
  //console.log(this.y);
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.movDown = function (beer) {
  this.y = parseInt($('#barman').css('top'));

  if (this.y < 375) {
    this.y += 75;
  }
  //console.log(this.y);
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.collect = function (a){
  var beerOne = 75;
  var beerTwo = 225;
  var beerThree = 375;
  if (this.y == beerOne) {
    a.x = 375 - 75;
    $("#beer0").css('left', a.x);
  }

  if (this.y == beerTwo) {
    a.x = 375 - 75;
    $("#beer1").css('left', a.x);
  }

  if (this.y == beerThree) {
    a.x = 375 - 75;
    $("#beer2").css('left', a.x);
  }
  this.service= true;
};

Barman.prototype.throw = function (a){
  var beerOne = 75;
  var beerTwo = 225;
  var beerThree = 375;

  //if (this.y == beerOne) {
      if (a.x >0) {
        a.x = a.x -10;
        $("#beer0").css('left', a.x);
        //console.log(a.x);
      }
  //  }
  this.service= false;
};
