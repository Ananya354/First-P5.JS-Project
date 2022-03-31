function preload(){
}

function setup() {
canvas = createCanvas(500,400);
canvas.position(700,200);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video,100,80,300,250);
stroke(250, 5, 74);
fill(250, 5, 74);

circle(40,40,50);
circle(460,40,50);
circle(40,360,50);
circle(460,360,50);

stroke(250, 185, 5);
fill(250, 185, 5);

rect(63, 27, 375, 25);
rect(63, 347, 375, 25);
rect(27, 63, 25, 275);
rect(448, 63, 25, 275);
}

function take_snapshot(){
    save("Picture.png");
}