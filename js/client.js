function Client() {
  this.position = [];
  this.size = 75;
  this.wait = 3000;
  this.drink = true;
}

function ramdomClient (){
  var file = Math.floor((Math.random() * 3) + 1);
  console.log(file);
  if (file == 1){
    $('.client1').css('visibility', 'visible');
  }else if (file == 2){
    $('.client2').css('visibility', 'visible');
  }
  else{
    $('.client3').css('visibility', 'visible');
  }
}

Client.prototype.push = function (){

};

Client.prototype.exit = function (){

};
