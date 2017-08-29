
var barman = new Barman();
var client = new Client();
var keys = {};

$(document).ready(function (){
  $(document).on('keydown', function(e){
    keys[e.keyCode] = true;
    }).keyup(function(e){
    delete keys[e.keyCode];
  });

  client.push();

  setInterval(function (){
    if (keys[38]) {
      barman.movUp();
    }
     else if(keys[40]) {
       barman.movDown();
     }
   },30);
});
