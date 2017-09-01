function Client(position) {
<<<<<<< HEAD

  this.client = {
    row: position[0],
    col: position[1],
  };
  this.llegada = false;
  this.size = 75;
=======
  this.position =position;
  this.appears = false;
>>>>>>> dev
  this.arrival = 3000;
  this.wait = 0;
}

<<<<<<< HEAD


Client.prototype.push = function (){

  if (this.client.row % 2 === 0) {
    console.log(this.client);
    this.llegada = true;
    return this.client;

  }
};

Client.prototype.exit = function (){

=======
Client.prototype.drawClient= function (){
  $("#bar").append(this.position);
  this.appears= true;
>>>>>>> dev
};
