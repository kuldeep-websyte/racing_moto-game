var bluecar = document.getElementById('bluecar');

var racecar = document.getElementById('race');

var result = document.getElementById('result');

var para = document.getElementById('score');

var game= document.getElementById('game');
var counter =0;
var audio = document.getElementById('audio');


// bluecar move

bluecar.addEventListener('animationiteration', function () {
    var random = (Math.floor(Math.random() * 3) * 85)
    bluecar.style.left = random + "px "
    counter++;
})

// race car move

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") { var race = parseInt(window.getComputedStyle(racecar).getPropertyValue("left")) }
    if (race < 130) {
        racecar.style.left = (race + 85) + "px"
        audio.play()                            
    };

    if (e.keyCode == "37") {
         var race = parseInt(window.getComputedStyle(racecar).getPropertyValue("left")) 
        
    if (race > 0) {
        racecar.style.left = (race - 85) + "px"
        audio.play() 
    }
    };
})


// game Over
setInterval(
function over(){
    var blueTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var blueleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var race = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

    if((blueleft===race) && (blueTop > 250) && (blueTop < 450)){
          result.style.display = "block";
          game.style.display = "none";
          score.innerHTML = `score: ${counter}`;
          counter = 0;
    }
},10 )