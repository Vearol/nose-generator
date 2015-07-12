function drawMouth(canvasId) {
    var drawingCanvas = document.getElementById(canvasId);

    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115); 
     context.closePath();
     context.stroke();
    }
}
