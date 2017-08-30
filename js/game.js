

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
      beer.movUp(barman);
    }
    if(keys[40]) {
       barman.movDown();
       beer.movDown(barman);
     }
     if (keys[39]) {
       barman.collect(beer);
      //  if (keys[38]) {
      //    barman.movUp();
      //    beer.movUp(barman);
      //  }
      //  if(keys[40]) {
      //    barman.movDown();
      //    beer.movDown(barman);
      //   }
     }
     if (keys[37]) {

     }
   },100);

   create();

});
