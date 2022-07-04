lwx= 0;
rwx= 0;
diff= 0;

function setup() {
    video= createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 200);
    canvas= createCanvas(500, 500);
    canvas.position(700, 230);
    posenet= ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}

function modelloaded() {
    console.log("loaded!!! \(^_^)/")
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        lwx= results[0].pose.leftWrist.x;
        rwx= results[0].pose.rightWrist.x;
        console.log(lwx, rwx);
        diff= floor(lwx - rwx);
    }
}

function draw() {
    background('#cffbff');
    textSize(diff);
    fill('#f2b93f');
    text("Meow", 0, 300);
}