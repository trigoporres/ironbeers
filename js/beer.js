function Beer() {
  this.position =
    ['#beer1','#beer2', '#beer3'];
  this.arrival = 3000;
  this.service = false;
}

Beer.prototype.ramdomBeer = function(){
  return Math.floor((Math.random() * 3));
};

Beer.prototype.push = function (){
  var that = this;
  //setInterval(function(){
    var file = that.ramdomBeer();
    cerveza = that.position[file];

    $(that.position[file]).css("visibility", "visible");
    this.service = true;
    apto = this.service;

    positionBeer = parseInt($(that.position[file]).css('top'));
  //},3000);
};
