const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    // fill("black") 
    // text(hour,200 , 200)

}

function draw(){
  
    // add condition to check if any background image is there to add
  if(backgroundImg)
     background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    let h = hour();
    strokeWeight(4)
    stroke("yellow") 
    fill("red")
    textSize(50)
    text("HOUR:"+ h,10,150)

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON = await response.json()

    //change the data in JSON format
    var datetime = responseJSON.datetime
    // write code slice the datetime
     var hour = datetime.slice(11,13)
     console.log(hour)
 
    // add conditions to change the background images from sunrise to sunset
    if(hour>=09 && hour<=10){
        bg = "sunrise4.png"
    }
    else if(hour>=11 && hour<=12){
        bg = "sunrise5.png"
    }
    else if(hour>=13 && hour<=14){
        bg = "sunrise6.png"
    }
    else if(hour>=15 && hour<=16){
        bg = "sunset7.png"
    }
    else if(hour>=07 && hour<=08){
        bg = "sunrise3.png"
    }
    else if(hour>=05 && hour<=06){
        bg = "sunrise2.png"
    }
    else if(hour>=17 && hour<=18){
        bg = "sunset8.png"
    }
    else if(hour>=19 && hour<=20){
        bg = "sunset9.png"
    }   
    else if(hour>=21 && hour<=22){
        bg = "sunset10.png"
    }
       else if(hour>=23 && hour<=24){
        bg = "sunset11.png"
    }
       else if(hour>=01 && hour<=02){
        bg = "sunset12.png"
    }
       else if(hour>=03 && hour<=04){
        bg = "sunrise1.png"
    }

    

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
}
