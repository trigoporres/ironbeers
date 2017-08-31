function Beer(position, identifier) {
  this.position = position;
  this.identifier = identifier;
  this.arrival = 3000;
  this.positionBeer = 0;
  this.x = 0;
  this.file = 0;
}

// Beer.prototype.ramdomBeer = function(){
//   return Math.floor((Math.random() * 3));
// };
Beer.prototype.DrawBeer= function (){
  $("#barra").append(this.position);
};

Beer.prototype.push = function (){

};


Beer.prototype.movUp = function () {
    var top = parseInt($(this.identifier).css('top'));
     top -= 75;
    $(this.identifier).css('top', top + 'px');
};


Beer.prototype.movDown = function () {
    var down = parseInt($(this.identifier).css('top'));
    top += 75;
    $(this.identifier).css('top', down + 'px');
  };
