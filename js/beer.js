function Beer(position, identifier) {
  this.position = position;
  this.identifier = identifier;
  this.inProcess = false;
}

Beer.prototype.DrawBeer= function (){
  $("#barra").append(this.position);
};

Beer.prototype.update = function(barman){
  $(this.identifier).css({
    'top': barman.y,
    'left':this.position
  });
};

Beer.prototype.throw = function (){
  positionT = parseInt($(this.identifier).css('left'));
  if (positionT > 0) {
    positionT = positionT - 10;
  }
  $(this.identifier).css('left', positionT);
  this.service= false;
};
