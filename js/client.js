function Client(position) {
  this.position =position;
  this.size = 75;
  this.arrival = 3000;
  this.wait = 0;
  this.timeDrink = 0;
}

Client.prototype.ramdomClient = function(){
  return Math.floor((Math.random() * 12));
};

Client.prototype.drawClient= function (){
  $("#bar").append(this.position);
};
