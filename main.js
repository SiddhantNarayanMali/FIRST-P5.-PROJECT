function preload()
{}

function setup()
{
    Canvas = createCanvas(500,500);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw()
{
    image(Video,110,100,200,200);
   
    fill("green");
    stroke("green");
    rect(20,5,5,385);
    fill("green");
    stroke("green");
    rect(6,17,400,5);
    fill("green");
    stroke("green");
    rect(7,390,385,5);
    fill("green");
    stroke("green");
    rect(390,17,5,385);
    fill("red");
    stroke("red");
    circle(20,16,30);
    fill("red");
    stroke("red");
    circle(390,20,32);
    fill("red");
    stroke("red");
    circle(22,390,30);
    fill("red");
    stroke("red");
    circle(390,390,30);

}

function snap()
{
    save("My photo.png");
}