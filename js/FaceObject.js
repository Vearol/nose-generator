function FaceObject() {
    var faceObject = new Object();

    faceObject.drawHead = function(context) {
    };

    faceObject.drawNose = function(context) {
    };

    faceObject.drawBeard = function(context) {
    };

    faceObject.drawMouth = function(context) {
    };

    faceObject.drawEyes = function(context) {
    };

    faceObject.drawHair = function(context) {
    };

    faceObject.drawEars = function(context) {
    };

    // and event more

    faceObject.render = function(canvasId) {
        var drawingCanvas = document.getElementById(canvasId);

        if(drawingCanvas && drawingCanvas.getContext) {
            var context = drawingCanvas.getContext('2d');
            
            this.drawHead(context);
            this.drawNose(context);
            this.drawBeard(context);
            this.drawMouth(context);
            this.drawEyes(context);
            this.drawHair(context);
            this.drawEars(context);
        }
    };

    faceObject.clear = function(canvasId) {
        var drawingCanvas = document.getElementById(canvasId);

        if(drawingCanvas && drawingCanvas.getContext) {
            var context = drawingCanvas.getContext('2d');
            context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        }
    };

    return faceObject;
}
