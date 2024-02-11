function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IFY6Kyfdh/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Ready");
    console.log(classifier);
}