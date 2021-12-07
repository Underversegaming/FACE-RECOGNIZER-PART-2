//https://teachablemachine.withgoogle.com/models/nc7HoX16j/
Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("results").innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}
console.log('ml5 version: ',ml5.version);