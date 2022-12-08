noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(500, 500);
    video.position(300, 150);
    canvas.position(900, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getResults);
}

function draw(){
    background('#450202');
    fill('#f0ebeb');
    stroke('#ceedf0');
    square(noseX, noseY, difference);
    document.getElementById('square_size').innerHTML = "Side of the square is " + difference + " px.";
}

function modelLoaded(){
    console.log('Model is Loaded');
}

function getResults(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX = ' + noseX + ' noseY = ' + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + " rightwristX = " + rightwristX + " difference = " + difference);
    }
}