function Client() {
  this.position = [];
  this.size = 75;
  this.arrival = 3000;
  this.wait = 0;
  this.timeDrink = 0;
  //this.drink = true;
}

Client.prototype.ramdomClient = function(){
  var file = Math.floor((Math.random() * 3));
  console.log(file);

  if (file == 1){
    $('.client1').css('visibility', 'visible');
  }else if (file == 2){
    $('.client2').css('visibility', 'visible');
  }
  else{
    $('.client3').css('visibility', 'visible');
  }
};

Client.prototype.push = function (){

};

Client.prototype.exit = function (){

};
