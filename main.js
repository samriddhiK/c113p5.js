function setup()
{
    canvas = createCanvas(800, 600);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
  


function draw()
{
   circle(50, 50, 70);
   fill(215, 215, 0);
   stroke(111, 78, 55);

   circle(750, 50, 70);
   fill(215, 215, 0);
   stroke(111, 78, 55);

   circle(750, 550, 70);
   fill(215, 215, 0);
   stroke(111, 78, 55);

   circle(50, 550, 70);
   fill(215, 215, 0);
   stroke(111, 78, 55);

   //rect function is (x, y, l, w)
   rect(82, 35, 636, 20);
   rect(43,80, 20, 435);
   rect(82, 545, 636, 20);
   rect(745, 80, 20, 435);
}

function take_snapshot() {
    save('student_name.png');
}

