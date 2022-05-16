var selfie, selfieImage, selfieSound;
var selfieState = true;

function preload(){
selfieImage = loadImage("selfie.jpg");
selfieSound = loadSound("ThePoem.mp3");
}

function setup() {
createCanvas(400, 600);

selfie = createSprite(200, 300, 400, 600);
selfie.addImage("mother", selfieImage);
}

function draw() {
background(0);

setTimeout(function(){
if (!selfieSound.isPlaying() && selfieState === true){
selfieSound.play();
}
}, 150);

if (selfieState === true){
setTimeout(function(){
selfieState = false;
}, 60000);
}
drawSprites();
} 