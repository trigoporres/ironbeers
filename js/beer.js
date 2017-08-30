function Beer() {
  this.y = [0,1,2];
  this.arrival = 3000;
  this.positionBeer = 0;
  this.x = 0;
  this.file = 0;
}

Beer.prototype.ramdomBeer = function(){
  return Math.floor((Math.random() * 3));
};

Beer.prototype.push = function (){
  var that = this;
  setInterval(function(){

    that.file = that.ramdomBeer();

      $("#beer"+that.file).remove();

      $("#barra").append("<div id= beer"+that.file+"  class='beer'></div>");

      $("#beer"+that.file).append("<img   src='./descarga.jpg'>");


    that.positionBeer = parseInt($("#beer"+that.file).css('top'));
    that.x = parseInt($("#beer"+that.file).css('left'));

 },3000);
};
