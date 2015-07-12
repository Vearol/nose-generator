var ListOfHeads = [
    {
        name: 'no head',
        renderer: function(context) {
        }
    },
    {
        name: "long head",
        renderer: function(context) {
            context.beginPath();
            context.arc(84,100,8,0,Math.PI*2,true);
            context.closePath();
            context.stroke();
            
            context.beginPath();
            context.arc(116,90,8,0,Math.PI*2,true);
            context.closePath();
            context.stroke();
            //
        }
    },
    {
        name: "round head",
        renderer: function(context) {
        }
    }
];

function selectHead(index, faceObject, canvasId) {
    if (typeof index !== 'undefined') {
        var head = ListOfHeads[index];
        faceObject.drawHead = head.renderer;
        faceObject.clear(canvasId);
        faceObject.render(canvasId);
    }
}
