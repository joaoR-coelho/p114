noseX=0;
noseY=0;

function preload() {
  clownNose = loadImage('https://postimg.cc/bsV5tR30');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center(); 
  video=createCapture(VIDEO)
  video.size(300,300)
  video.hide()
  poseNet=ml5.poseNet(video,modelLoaded)
  poseNet.on("pose",gotPoses)
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');

}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("narizX= "+results[0].pose.nose.x-15)
    console.log("narizY= "+results[0].pose.nose.y-15)
    
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownNose, noseX, noseY, 30, 30);
  
}

function takeSnapshot(){
  save('myFilterImage.png');
}
