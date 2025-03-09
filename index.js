
for(var i=0;i< document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {
      var butt= this.innerHTML;
      makesound(butt);
      anim (butt);
    })};
document.addEventListener("keydown",function(event){
    makesound(event.key);
    anim (event.key);
});
function makesound(key){
    switch(key){
        
        case "a":
            var s0 = new Audio("sounds/sound0.mp3");
            s0.play();
        break;
        case "s":
            var s1 = new Audio("sounds/sound1.mp3");
            s1.play();
            break;
        case "d":
            var s2 = new Audio("sounds/sound2.mp3");
            s2.play();
            break;
        case "f":
            var s3 = new Audio("sounds/sound3.mp3")
            s3.play();
            break;
        case "k":
            var s4 = new Audio("sounds/sound4.mp3");
            s4.play();
            break;
        case "h":
            var s5 = new Audio("sounds/sound5.mp3");
            s5.play();
            break;
        case "j":
            var s6 = new Audio("sounds/sound6.mp3");
            s6.play();
            break;
        case "l":
            var s7 = new Audio("sounds/sound7.mp3");
            s7.play();
            break;
      }
}
function anim (currentkey){
    var active=document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");},100);
}