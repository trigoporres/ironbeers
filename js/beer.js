function Beer(position, identifier) {
  this.position = position;
  this.identifier = identifier;
  this.inProcess = false ;

  this.arrival = 3000;
  this.positionBeer = 0;
  this.y = 0;
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

Beer.prototype.update = function(barman){
  $(this.identifier).css({
    'top': barman.y,
    'left':this.x
  });
};
