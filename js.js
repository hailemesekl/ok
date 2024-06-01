/*(function (){

"use strict";

var imaA =['log.jpg','haile.jpg','henok.jpg'];
let currentImage = 0;
document.getElementById('nex').onclick = nex;
document.getElementById('pone').onclick = phone;

function nex(){
  currentImage++;
 if (currentImage >imaA.length-1){currentImage =0;}
  document.getElementById('image').src = imaA[currentImage];
  
}

function phone(){
  currentImage--;
 //if (currentImage  < imaA.length+1){currentImage =0;}
 if(currentImage < 0){currentImage = imaA.length-1;}
  document.getElementById('image').src = imaA[currentImage];
  
}


}());


*/