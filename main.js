$(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    //TODO
  
    /* 바둑판배열
    var c;
    for(var x=25; x<400; x+=50){
        for(var y=25; y<400; y+=50){
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }  */

    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'yellow';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'black';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event){
        // var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 30);
        c.fillColor = 'black';
    };

    paper.view.draw();
    console.log('main.js loaded');
});
