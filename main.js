status="";
video="";
function preload(){
    // video=createVideo('video.mp4');
    // video.hide();

}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}
function draw(){
    image(video,0,0,480,380)
}
function start(){
    objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status :detecting Objects";
}
function modelLoaded(){
    console.log("model Loaded")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);

} 