'use strict';

var canv1inst = void 0;
var renderTemplate = function renderTemplate() {

    var canv1 = function canv1(sketch1) {

        sketch1.setup = function () {
            sketch1.createCanvas(850, 350, sketch1.WEBGL);

            // sketch1.position(100,100);

        };
        var boxS = 0;
        var szIncrease = sketch1.sin(0.1);
        sketch1.draw = function () {
            sketch1.background(100);
            // sketch1.translate(sketch1.width/2, sketch1.height/2);
            sketch1.rotateX(sketch1.frameCount * 0.01);
            sketch1.box(boxS);

            boxS += szIncrease;
            // boxS > 1000 && -1*szIncrease;
            if (boxS > 1000) {
                boxS = 100;
            }

            if (sketch1.mouseIsPressed) {
                renderTemplate();
            }
        };
    };

    var Template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'ssss'
        ),
        React.createElement(
            'span',
            null,
            canv1inst = new p5(canv1, 'app')
        )
    );
};

var appRoot = document.getElementById('app');

renderTemplate();
