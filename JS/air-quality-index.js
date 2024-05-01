let api = Math.floor(Math.random() * 300);

console.log(api);
if(api >= 0 && api <= 50){
    console.log("Good");
}else if(api >= 51 && api <= 100){
    console.log("Moderate");
}else if(api >= 101 && api <= 150){
    console.log("Unhealthy (Sensitive Groups)");
}else if(api >= 151 && api <= 200){
    console.log("Unhealthy");
}else if(api >= 201 && api <= 300){
    console.log("Very Unhealthy");
}else{
    console.log("Hazardous");
}