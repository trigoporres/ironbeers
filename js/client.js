function Client() {
  this.position =
    ['.uno','.dos', '.tres', '.cuatro', '.cinco', '.seis', '.siete', '.ocho', '.nueve', '.diez', '.once', '.doce'];
  this.size = 75;
  this.arrival = 3000;
  this.wait = 0;
  this.timeDrink = 0;
}

Client.prototype.ramdomClient = function(){
  return Math.floor((Math.random() * 12));
};

Client.prototype.push = function (){
  var that = this;
  setInterval(function(){
  
    var file = that.ramdomClient();

    $(that.position[file]).css("visibility", "visible");

  },3000);
};
