document.getElementById("set").style.display = "none";
document.getElementById("string").style.display = "none";

var opt;
var buttoninnerhtml;

document.querySelectorAll(".opt")[0].addEventListener("click", function() {
  opt = "guitar";
  document.getElementById("string").style.display = "block";
  document.getElementById("set").style.display = "none";
});

document.querySelectorAll(".opt")[1].addEventListener("click", function() {
  opt = "drum";
  document.getElementById("set").style.display = "block";
  document.getElementById("string").style.display = "none";
});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttoninnerhtml = this.innerHTML;
    makesounddrum(buttoninnerhtml);
    buttonanimationdrum(buttoninnerhtml);
  });
}

for (var i = 0; i < document.querySelectorAll(".guitar").length; i++) {
  document.querySelectorAll(".guitar")[i].addEventListener("click", function() {
    buttoninnerhtml=this.innerHTML;
    makesoundguitar(buttoninnerhtml);
    buttonanimationguitar(buttonInnerhtml);
  });
}

document.addEventListener("keypress", function(event) {
  if(opt=="drum")
  {
    makesounddrum(event.key);
    buttonanimationdrum(event.key);
  }
  if(opt=="guitar")
  {
    makesoundguitar(event.key);
    buttonanimationguitar(event.key);
  }
});

function makesounddrum(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function makesoundguitar(key) {
  switch (key) {
    case "w":
      var amajor = new Audio("sounds/Amajor.wav");
      amajor.play();
      break;
    case "a":
      var aminor = new Audio("sounds/Aminor.wav");
      aminor.play();
      break;
    case "s":
      var cmajor = new Audio("sounds/Cmajor.mp3");
      cmajor.play();
      break;
    case "d":
      var dmajor = new Audio("sounds/Dmajor.mp3");
      dmajor.play();
      break;
    case "h":
      var emajor = new Audio("sounds/Emajor.mp3");
      emajor.play();
      break;
    case "j":
      var eminor = new Audio("sounds/Eminor.wav");
      eminor.play();
      break;
    case "k":
      var fmajor = new Audio("sounds/Fmajor.wav");
      fmajor.play();
      break;
    case "l":
      var gmajor = new Audio("sounds/Gmajor.wav");
      gmajor.play();
      break;
    default:
      console.log(key);
  }
}

function buttonanimationguitar(currentkey) {
  var activebutton = document.querySelector("." + currentkey + "g");
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}

function buttonanimationdrum(currentkey) {
  var activebutton = document.querySelector("." + currentkey + "d");
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}
