
var barman = new Barman(); //crea camarero
var keys = {}; //inicializa teclas
var contador =0;

$(document).ready(function (){

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

      //console.log("me pulsas");
      }
       else if(keys[40]) {
         barman.movDown();
       }
       var top = Math.floor((Math.random() * 5));
       var left = Math.floor((Math.random() * 5 ));
       var position= [top,left];

       var client = new Client(position);
       var devuelve = client.push();

       var arrayClient = [];
       arrayClient.push(devuelve);

       console.log(arrayClient);

       setTimeout(function(){

         arrayClient.shift();
         console.log(arrayClient);

       },5000);

    },1000);




});
