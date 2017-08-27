
var barman = new Barman(); //crea camarero
var client = new Client(); //crea cliente
var keys = {}; //inicializa teclas

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
      if (keys[38]) {
        barman.movUp();
        client.ramdomClient ();
      //console.log("me pulsas");
      }
       else if(keys[40]) {
         barman.movDown();
       }


    },30);




});
