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

    that.positionBeer = parseInt($("#beer"+this.file).css('top'));
    that.x = parseInt($("#beer"+this.file).css('left'));

  },1000);
};
