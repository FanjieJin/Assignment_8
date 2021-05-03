function setup() {
    createCanvas(1500, 1000);
}

// Draw Hypotrochoid
function hypotrochoid(x, y) {

	var shape = mouseX - 500;
    var shape2 = mouseY - 160;
    stroke(0 + shape, 255 - shape2);
    a = map(mouseX, 0, width/5, 0, 60);
    b = a / constrain(mouseY, 0, height);
    h = 500;
    lines = 9000;
    push();
    beginShape();
    translate(0, 0);
    noFill();
    
    for(var i = 0; i < lines; i++) {
    	var geo = map(i, 0, lines, 0, TWO_PI);
        a = constrain(mouseX, 0, width);
        b = constrain(a/mouseY, 0, width);
        h = constrain(mouseY, 0, height);
        y = (a - b/2) * sin(geo) - h * sin(((a - b)/ b) * geo);
        x = (a - b/2) * cos(geo) + h * cos(((a - b)/ b) * geo);
        strokeWeight(0.1);
        stroke(179, 187, 255); 
        vertex(x/1.2,y/1.2);
    }
    endShape();
    pop();
}

function draw() {

    background(255);
    //top left hypotrochoid
    push();
    hypotrochoid();
    pop();
    //bottom right hypotrochoid
    push();
    translate(width/2, height/2);
    hypotrochoid();
    pop();
}