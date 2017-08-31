var keys = {};
var barman ;
var client ;
var beer0  ;
var beer1  ;
var beer2  ;
var count  ;

$(document).ready(function (){
  createHTML();

  function beerCollision(){
    var impactClient = ($(".beer").collision(".client"));
    if (impactClient[0]) {
      $(impactClient).css('visibility', 'hidden');
      // $(".beer").remove();
    }
  }


  beer0  = new Beer("<div id= 'beer0' class='beer'></div>", "#beer0");
  beer1  = new Beer("<div id= 'beer1' class='beer'></div>", "#beer1");
  beer2  = new Beer("<div id= 'beer2' class='beer'></div>", "#beer2");
  barman = new Barman();




  setInterval(function (){
    generateClient();
    client.drawClient();
    count ++;
    if (count >= 12) {
      clearInterval();
    }
    beerCollision();
  },3000);



  nextBeer(beer0);

  setInterval(function (){
    checkControls();
    if (beer0.inProcess == true){barman.throw(beer0);}

  },150);


});

function nextBeer (beer){
    setTimeout(function(){
    beer.DrawBeer();
  },3000);
}

function generateClient(){
  var top = [0,150,300];
  var left = [0,75,150,225];
  var ramdomTop = Math.floor((Math.random() * 3));
  var ramdomLeft = Math.floor((Math.random() * 4));
  var result = Math.floor((Math.random() * 12));
  client = new Client("<div class='client' style= 'top:"+top[ramdomTop]+"px;left:"+left[ramdomLeft]+"px'></div>");
}

function checkControls (){
  if (keys[38]) {
    barman.movUp();
    if ( barman.service == true){beer0.update(barman);}
  }
  if(keys[40]) {
     barman.movDown();
     if ( barman.service == true){beer0.update(barman);}
  }
  if (keys[39]) {
   barman.collect(beer0);
  }
  if (keys[37]) {
   beer0.inProcess = true;

  }
}

$(document).on('keydown', function(e){
  keys[e.keyCode] = true;
  }).keyup(function(e){
  delete keys[e.keyCode];
});
