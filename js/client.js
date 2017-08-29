function Client(position) {

  this.client = {
    row: position[0],
    col: position[1],
  };
  this.llegada = false;
  this.size = 75;
  this.arrival = 3000;
  this.wait = 0;
  this.timeDrink = 0;
  //this.drink = true;
}



Client.prototype.push = function (){

  if (this.client.row % 2 === 0) {
    console.log(this.client);
    this.llegada = true;
    return this.client;

  }
};

Client.prototype.exit = function (){

};
