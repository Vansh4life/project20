var cat, mouse, background;

function preload() {
    //load the images here
    var gardenImg,catImg,catImg2,catImg3;

mouseImg = loadImage("mouse3.png");
mouseImg2

gardenImg = loadImage("garden.png");

catImg = loadImage("cat1.png");
catImg2 = loadImage("cat2.png");
catImg3 = loadImage("cat4.png");

mouseImg = loadImage("mouse3.png");
mouseImg2 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    background = createSprite(500,400,0,0);
    background.addImage(gardenImg);
    //create tom and jerry sprites here

    cat = createSprite(800,600,0,0);
    cat.addImage(catImg);

    mouse = createSprite(200,600,0,0);
    mouse.addImage(mouseImg);
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseLoses", mouseImg2);
        mouse.changeAnimation("mouseLoses");

        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
  }


}
