//declaring all the variables
var box

//code in the function setup runs only once
//that is for the first frame
function setup(){
  createCanvas(400,400)
  box = createSprite(200,200,50,50)
}

//code here works for every frame 
function draw(){
  background(0)

  if(keyDown("w")){
    box.y=box.y-5
  }
  if(keyDown("s")){
    box.y=box.y+5
  }
  if(keyDown("a")){
    box.x=box.x-5
  }
  if(keyDown("d")){
   box.x=box.x+5
  }
  drawSprites()
}
