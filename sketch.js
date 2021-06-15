var canvas;
var music;
var movingBox;
var rect1, rect2, rect3, rect4;

function preload(){
    music = loadSound("music.mp3");
    


}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    rect1 = createSprite(100, 580, 200, 30);
    rect1.shapeColor = 'red';
    rect2 = createSprite(330, 580, 200, 30);
    rect2.shapeColor = 'blue';
    rect3 = createSprite(560, 580, 200, 30);
    rect3.shapeColor = 'purple';
    rect4 = createSprite(800, 580, 200, 30);
    rect4.shapeColor = 'orange';
     //create box sprite and give velocity
     movingBox =  createSprite(random(20,750), 150, 50, 50);
     movingBox.shapeColor = 'white';
     movingBox.velocityY = 4;
     movingBox.velovityX = 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    


    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(movingBox) && movingBox.bounceOff(rect1)){
        movingBox.shapeColor = 'red';
    }
    if(rect2.isTouching(movingBox) && movingBox.bounceOff(rect2))[
       movingBox.shapeColor = 'blue' 
    ]

    
    drawSprites();
}
