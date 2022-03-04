// function fun()
//  {
//     var name = prompt('what is your name?');
//     var result = 'hello ' + name;
//     console.log(name);
//     console.log(result);

// }
// fun();

// function fun(num1, num2)
//  {

//     console.log("num1 "+ num1);
//     console.log("num2 "+ num2);
//     var result =num1 + num2;
//     return (num1 + num2);
    
// }
// fun(10, 10);

// function fun1(num1, num2)
//  {
//      console.log("num1: " + num1);
//      console.log("num2: " + num2);
//      return(num1+ num2);

// }
// var result = fun1(10,20);
// console.log("result:" +result);


//for(Start;condition;inc/dec) 
//{
// body
//}
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfDrumButton;i++){
 
document.querySelectorAll("button")[i].addEventListener("click",
function () {
   console.log(this);
   var buttonInnerHTML = this.innerHTML;

   switch(buttonInnerHTML) {

       case "Sa":
           var audio = new Audio("assets/music/tom-1.mp3")
           audio.play();
           break;
       case "Re":
        var audio = new Audio("assets/music/tom-2.mp3")
        audio.play();
           break;
       case "Ga":
           var audio = new Audio("assets/music/tom-3.mp3")
           audio.play();
           break;
       case "Ma":
        var audio = new Audio("assets/music/tom-4.mp3")
        audio.play();
           break;
        case "Pa":
            var audio = new Audio("assets/music/snare.mp3")
           audio.play();
           break;
        case "Dha":
            var audio = new Audio("assets/music/crash.mp3")
           audio.play();
           break;
        case "Ni":
            var audio = new Audio("assets/music/kick-bass.mp3")
           audio.play();
           break;
   }
} 
);
    
}
document.addEventListener("keypress", function(event){
    console.log(event);
})
//addEventListener(type, listener);