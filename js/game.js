

$(document).ready(function (){
  $(document).on('keydown', function(e){
    keys[e.keyCode] = true;
    }).keyup(function(e){
    delete keys[e.keyCode];
  });

  var barman = new Barman();
  var client = new Client();
  var beer = new Beer();
  var keys = {};

  client.push();
  beer.push();

  setInterval(function (){
    if (keys[38]) {
      barman.movUp();
    }
    if(keys[40]) {
       barman.movDown();
       beer.newPosition(barman);
     }
     if (keys[39]) {

       collect();
     }
     if (keys[37]) {
       barman.throw();
     }
   },100);

   create();

   function collect(){
     if (beer.positionBeer === barman.y) {
       console.log("hola");
       console.log(beer.positionBeer);
       console.log(barman.y);
       beer.x = beer.x -75;
       $("#beer"+beer.file).css('left', beer.x);
     }

   }
});
