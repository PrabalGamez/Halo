leftIx=0;
leftIy=0;

function preload(){
    halo=loadImage("https://i.postimg.cc/N0gX37kd/1047aa3d6f4f78e477e64768e2a2ec30.png");
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(halo, leftIx, leftIy, 150, 150);
}

function modelLoaded(){
    console.log("ModelLoaded")
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        leftIx=result[0].pose.leftEye.x-300;
        leftIy=result[0].pose.leftEye.y-250;
        console.log(leftIx+ leftIy)
    }
}

function takeS(){
    save("Halo!.png");
}