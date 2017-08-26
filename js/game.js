//declaramos constructor
var barman = new Barman();
var keys = {};

$(document).ready(function (){
    //console.log(barman.movUp());

    //almacena codigo tecla pulsada
    $(document).on('keydown', function(e){
      //  console.log("pulso");
     keys[e.keyCode] = true;
      }).keyup(function(e){
      delete keys[e.keyCode];
    });

    //intervalo que permita el movimiento
    setInterval(function (){
      //console.log("hola");
      if (keys[81]) {
        barman.movUp();
      //console.log("me pulsas");
      }
       else if(keys[65]) {
         barman.movDown();
       }


    },30);




});
