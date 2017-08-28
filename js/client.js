function Client() {
  this.position = this.randomPostion();
  this.file = [
    '0'['0','77.156',    ]
  ];
  this.llegada = false;
  this.size = 75;
  this.arrival = 3000;
  this.wait = 0;
  this.timeDrink = 0;
  //this.drink = true;
}

Client.prototype.ramdomPosition = function(){

  return  Math.floor((Math.random() * 12));

};

// Client.prototype.push = function (){
//
//   var that = this;
//   var aparecidos = [];
//
//
//   setInterval(function(){
//     //$(that.position[file]).addClass("visi");
//     var file = that.ramdomClient();
//
//     aparecidos.push(that.position[file]);
//     $(that.position[file]).addClass("visi");
//     console.log(aparecidos);
//
//     setInterval(function (){
//        console.log(aparecidos);
//        $(aparecidos[0]).removeClass("visi");
//        aparecidos.shift();
//
//        console.log("debo borrar");
//        console.log(aparecidos);
//      },5000);
//   },1000);
//
// };

Client.prototype.exit = function (){

};
