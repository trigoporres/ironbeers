function Beer() {
  this.y = [0,1,2];
  this.arrival = 3000;
  this.positionBeer = 0;
  this.x = 0;
  this.file = 0;
}

// Beer.prototype.ramdomBeer = function(){
//   return Math.floor((Math.random() * 3));
// };

Beer.prototype.push = function (){
  var that = this;
  setTimeout(function(){

    for (var i = 0; i < that.y.length; i++) {
      $("#barra").append("<div id= beer"+i+"  class='beer'></div>");

      $("#beer"+i).append("<img   src='./descarga.jpg'>");
    }

    that.positionBeer = parseInt($("#beer"+that.file).css('top'));
    that.x = parseInt($("#beer"+that.file).css('left'));


  },1000);
};


Beer.prototype.movUp = function (a) {
  for (var i = 0; i < this.y.length; i++) {
    var top = $("#beer"+this.y[i]).css('top');
    if (top == a.y) {
      var beerTop = top -75;
      parseInt($("#beer"+this.y[i]).css('top', beerTop));
    }
  }
};

Beer.prototype.movDown = function (a) {
  for (var i = 0; i < this.y.length; i++) {
    var down = $("#beer"+this.y[i]).css('top');
    if (down == a.y){

      var beerDown = down +75;
      parseInt($("#beer"+this.y[i]).css('top', beerDown));
    }
  }
};
