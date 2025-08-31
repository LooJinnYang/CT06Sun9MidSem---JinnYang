function setup(){
 createCanvas(600, 400);
 background(0);
}

function draw() {
circle(150, height/2, 100);
fill("black");
stroke("red");
strokeWeight(10);

triangle(width/2, height/2 - 50, width/2 + 50, height/2 + 50, width/2 - 50, height/2 + 50);
fill("black");
stroke("red");
strokeWeight(10);

rect(width/2 + 100, height/2 - 50, 100, 100);
fill("black");
stroke("red");
strokeWeight(10);
}
