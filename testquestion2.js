function setup(){
 createCanvas(600, 600);
 background(220);
}

function draw() {

for (let i = 0; i < 10; i++){
    let shade = i * 50 + 50
    fill(shade);
    ellipse(i * 50 + 50 , i *50 + 50 , 50 , 50);
}
}