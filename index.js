//detecting button press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      
      var buttonInnerHTML=this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
   });

}

//detecting keyboard press
document.addEventListener("keypress",function(event) {
   makeSound(event.key);
   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100);
});

function makeSound(key){
   switch (key) {
      case "w":
         var audio=new Audio("sounds/tom_1.mp3");
         audio.play();
         break;
      case "a":
         var audio=new Audio("sounds/tom_2.mp3");
         audio.play();
         break;
      case "s":
         var audio=new Audio("sounds/tom_3.mp3");
         audio.play();
         break;
      case "s":
         var audio=new Audio("sounds/tom_3.mp3");
         audio.play();
         break;
      case "d":
         var audio=new Audio("sounds/tom_4.mp3");
         audio.play();
         break;
      case "j":
         var audio=new Audio("sounds/crash.mp3");
         audio.play();
         break;
      case "k":
         var audio=new Audio("sounds/snare.mp3");
         audio.play();
         break;
      case "l":
         var audio=new Audio("sounds/kick_bass.mp3");
         audio.play();
         break;
      default:
         break;
   }
}

function buttonAnimation(currentKey){
   var activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100);
}
