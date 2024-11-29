let musica;

function preload(){
  musica = loadSound("musicaharry.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}