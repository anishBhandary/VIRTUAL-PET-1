//Create variables here
var dog, dogImg,happyDogImg,database,foods,foodStock;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  //foodStock.add(20);
  

  dog = createSprite(250,350,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
}


function draw() {  
  background("green");
  
    textSize(20);
    fill(255);
    text("Note: Press UP ARROW to feed DRAGO milk",50,50);
    text("Food Remaining:",foods,150,150);
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDogImg);
  }

  //if(keyWentUp(UP_ARROW)){
    //dog.addImage(dogImg);
 // }

 

  drawSprites();
  //add styles here

}



function readStock(data){
  foods = data.val();

}

function writeStock(x){
  
  database.ref("/").update({
    foods:x
  });

}


