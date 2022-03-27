cube="";

function setup(){
    canvas = createCanvas(420, 420);
    canvas.center();

    video = createCapture(420, 420);
    video.hide();
}

function draw(){
    image(video, 0, 0, 420, 420);
}

function start(){
    objectDetector = ml5.objectdetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("input").ariaValueMax;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}