var dog,database;
var foodS,foodStock;
var dogIMG,happyDogIMG;
function preload()
{
  dogIMG=loadImage("images/dogImg.png");
  happyDogIMG=loadImage("images/dogImg1.png");
}
function setup() {
  createCanvas(500,500);
  dog = createSprite(100,100,50,50);
  dog.addImage(dogIMG);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}
function draw() {
  background(46,139,87);
  dog.scale=0.2;
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  drawSprites();
  textSize=(10);
  fill("green");
  stroke(10);
  text("note: press up key to feed drago milk",250,50)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}