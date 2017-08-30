function Beer() {
  this.position =
    ['beer1','beer2', 'beer3'];
  this.arrival = 3000;
  this.count = 3;
}

Beer.prototype.ramdomBeer = function(){
  return Math.floor((Math.random() * 3));
};

Beer.prototype.push = function (){
  var that = this;
  setInterval(function(){

    var file = that.ramdomBeer();


    if (that.count >0) {
      $("#" + that.position[file]).remove();

      $("#barra").append("<div id="+ that.position[file]+"  class='beer'></div>");

      $("#" + that.position[file]).append("<img   src='./descarga.jpg'>");

      that.count --;
    }

    positionBeer = parseInt($(that.position[file]).css('top'));
    return that.position[file];
 },3000);
};
