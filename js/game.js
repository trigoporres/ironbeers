var keys = {};
var barman;
var client;
var beers = [];
var clients = [];
var count;

$(document).ready(function() {
  createHTML();

  function beerCollision() {
    var impactClient = ($(".beer").collision(".client"));
    if (impactClient[0]) {
      $(impactClient).css('visibility', 'hidden');
    }
  }
  var top = [0, 150, 300];
  var left = [0, 75, 150, 225];


  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
    clients.push(new Client("<div class='client' style= 'top:" + top[i] + "px;left:" +left[j] + "px'></div>"));
    }
  }
  console.log(clients);

  for (var b = 0; b < 3; b++) {
    beers.push(new Beer("<div id= 'beer"+b+"' class='beer'></div>", "#beer"+b));

  }
  console.log(beers);

  barman = new Barman(0);

  for (var w = 0; w < 3; w++) {
    nextBeer(beers);
  }

  setInterval(function (){
    var i = Math.floor(Math.random() * 12);
    clients[i].drawClient();
    beerCollision();
  },2000);

  setInterval(function() {
    checkControls();
    if (beers[0].inProcess == true) {
      beers[0].throw();
    }
    if (beers[1].inProcess == true) {
      beers[1].throw();
    }
    if (beers[2].inProcess == true) {
      beers[2].throw();
    }
  }, 150);
});

function nextBeer(beers) {
    for (var i = 0; i < 3; i++) {
      beers[i].DrawBeer();
    }
}

function checkControls() {
  if (keys[38]) {
    barman.movUp();
    if (barman.service == true) {
      //beers[0].update(barman);
      switch (barman.y) {
        case 75:
          beers[0].update(barman);
          break;
        case 225:
          beers[1].update(barman);
          break;
        case 375:
          beers[2].update(barman);
          break;
        default:
      }
    }
  }
  if (keys[40]) {
    barman.movDown();
    if (barman.service == true) {
      beers[0].update(barman);
    }
  }
  if (keys[39]) {
    switch (barman.y) {
      case 75:
        barman.collect(beers[0]);
        break;
      case 225:
        barman.collect(beers[1]);
        break;
      case 375:
        barman.collect(beers[2]);
        break;
      default:
      console.log("Error no cogiste nada");
    }
  }
  if (keys[37]) {
    switch (barman.y) {
      case 75:
        beers[0].throw();
        barman.service=false;
        beers[0].inProcess = true;

      break;
      case 225:
        beers[1].throw();
        barman.service=false;
        beers[1].inProcess = true;

        break;
      case 375:
        beers[2].throw();
        barman.service=false;
        beers[2].inProcess = true;

        break;
      default:
      console.log("Error no lanzaste nada");
    }

  }
}

$(document).on('keydown', function(e) {
  keys[e.keyCode] = true;
}).keyup(function(e) {
  delete keys[e.keyCode];
});
