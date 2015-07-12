function drawEye(canvasId) {
    var drawingCanvas = document.getElementById(canvasId);

    if(drawingCanvas && drawingCanvas.getContext) {

        var context = drawingCanvas.getContext('2d');
        
        context.beginPath();
        context.arc(84,100,8,0,Math.PI*2,true);
        context.closePath();
        context.stroke();
        
        context.beginPath();
        context.arc(116,90,8,0,Math.PI*2,true);
        context.closePath();
        context.stroke();
    }
}
