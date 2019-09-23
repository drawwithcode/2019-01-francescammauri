function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
 angleMode(DEGREES);
 frameRate(30);
 background("darkblue");
 translate(400,height/2)




}

function draw() {
  // put drawing code here

background(000,0,0,30)
  translate(400,height/2)
push()
 stroke(lerpColor(color('orange'), color('red'),frameCount/10));
 line(-width/10,0,-(cos (frameCount*5)*width/10), -(sin (frameCount*5)*width/10));
pop()
push()
translate(-400, -300)
rotate(frameCount*5);
 noFill();
 stroke("grey");
 line(40,40,10,10);
 pop()
 push()
 translate(-250, -300)
 rotate(frameCount*5);
  noFill();
  stroke("grey");
  line(40,40,10,10);
pop()
push()
  translate(-100,-300)
  rotate(frameCount*5);
   noFill();
   stroke("grey");
   line(40,40,10,10);
 pop()
 push()
   translate(50,-300)
   rotate(frameCount*5);
    noFill();
    stroke("grey");
    line(40,40,10,10);
  pop()
  push()
    translate(200,-300)
    rotate(frameCount*5);
     noFill();
     stroke("grey");
     line(40,40,10,10);
   pop()
   push()
     translate(350,-300)
     rotate(frameCount*5);
      noFill();
      stroke("grey");
      line(40,40,10,10);
    pop()
    push()
      translate(500,-300)
      rotate(frameCount*5);
       noFill();
       stroke("grey");
       line(40,40,10,10);
     pop()
     push()
       translate(650,-300)
       rotate(frameCount*5);
        noFill();
        stroke("grey");
        line(40,40,10,10);
      pop()
      push()
        translate(800,-300)
        rotate(frameCount*5);
         noFill();
         stroke("grey");
         line(40,40,10,10);
       pop()
       push()
         translate(950,-300)
         rotate(frameCount*5);
          noFill();
          stroke("grey");
          line(40,40,10,10);
        pop()
        push()
        translate(-400, -150)
        rotate(frameCount*5);
         noFill();
         stroke("grey");
         line(40,40,10,10);
         pop()
         push()
         translate(-250, -150)
         rotate(frameCount*5);
          noFill();
          stroke("grey");
          line(40,40,10,10);
        pop()
        push()
          translate(-100,-150)
          rotate(frameCount*5);
           noFill();
           stroke("grey");
           line(40,40,10,10);
         pop()
         push()
           translate(50,-150)
           rotate(frameCount*5);
            noFill();
            stroke("grey");
            line(40,40,10,10);
          pop()
          push()
            translate(200,-150)
            rotate(frameCount*5);
             noFill();
             stroke("grey");
             line(40,40,10,10);
           pop()
           push()
             translate(350,-150)
             rotate(frameCount*5);
              noFill();
              stroke("grey");
              line(40,40,10,10);
            pop()
            push()
              translate(500,-150)
              rotate(frameCount*5);
               noFill();
               stroke("grey");
               line(40,40,10,10);
             pop()
             push()
               translate(650,-150)
               rotate(frameCount*5);
                noFill();
                stroke("grey");
                line(40,40,10,10);
              pop()
              push()
                translate(800,-150)
                rotate(frameCount*5);
                 noFill();
                 stroke("grey");
                 line(40,40,10,10);
               pop()
               push()
                 translate(950,-150)
                 rotate(frameCount*5);
                  noFill();
                  stroke("grey");
                  line(40,40,10,10);
                pop()

push()
translate(200,0);
 stroke(lerpColor(color('red'), color('orange'),frameCount/10));
 line(width/10,0,(cos (frameCount*5)*width/10),(sin (frameCount*5)*width/10));
  push()
    translate(-600,-0)
    rotate(frameCount*5);
     noFill();
     stroke("grey");
     line(40,40,10,10);
   pop()
   push()
     translate(-450,-0)
     rotate(frameCount*5);
      noFill();
      stroke("grey");
      line(40,40,10,10);
    pop()
    push()
      translate(-300,-0)
      rotate(frameCount*5);
       noFill();
       stroke("grey");
       line(40,40,10,10);
     pop()
     push()
       translate(-150,-0)
       rotate(frameCount*5);
        noFill();
        stroke("grey");
        line(40,40,10,10);
      pop()
      push()
        translate(0,-0)
        rotate(frameCount*5);
         noFill();
         stroke("grey");
         line(40,40,10,10);
       pop()
       push()
         translate(150,-0)
         rotate(frameCount*5);
          noFill();
          stroke("grey");
          line(40,40,10,10);
        pop()
        push()
          translate(300,-0)
          rotate(frameCount*5);
           noFill();
           stroke("grey");
           line(40,40,10,10);
         pop()
         push()
           translate(450,-0)
           rotate(frameCount*5);
            noFill();
            stroke("grey");
            line(40,40,10,10);
          pop()
          push()
            translate(600,-0)
            rotate(frameCount*5);
             noFill();
             stroke("grey");
             line(40,40,10,10);
           pop()
           push()
             translate(750,-0)
             rotate(frameCount*5);
              noFill();
              stroke("grey");
              line(40,40,10,10);
            pop()
            push()
              translate(-600,150)
              rotate(frameCount*5);
               noFill();
               stroke("grey");
               line(40,40,10,10);
             pop()
             push()
               translate(-450,150)
               rotate(frameCount*5);
                noFill();
                stroke("grey");
                line(40,40,10,10);
              pop()
              push()
                translate(-300,150)
                rotate(frameCount*5);
                 noFill();
                 stroke("grey");
                 line(40,40,10,10);
               pop()
               push()
                 translate(-150,150)
                 rotate(frameCount*5);
                  noFill();
                  stroke("grey");
                  line(40,40,10,10);
                pop()
                push()
                  translate(0,150)
                  rotate(frameCount*5);
                   noFill();
                   stroke("grey");
                   line(40,40,10,10);
                 pop()
                 push()
                   translate(150,150)
                   rotate(frameCount*5);
                    noFill();
                    stroke("grey");
                    line(40,40,10,10);
                  pop()
                  push()
                    translate(300,150)
                    rotate(frameCount*5);
                     noFill();
                     stroke("grey");
                     line(40,40,10,10);
                   pop()
                   push()
                     translate(450,150)
                     rotate(frameCount*5);
                      noFill();
                      stroke("grey");
                      line(40,40,10,10);
                    pop()
                    push()
                      translate(600,150)
                      rotate(frameCount*5);
                       noFill();
                       stroke("grey");
                       line(40,40,10,10);
                     pop()
                     push()
                       translate(750,150)
                       rotate(frameCount*5);
                        noFill();
                        stroke("grey");
                        line(40,40,10,10);
                      pop()
translate(200,0);
 stroke(lerpColor(color('orange'), color('red'),frameCount/10));
rotate(90);
 line(-width/10,0,-(cos (frameCount*5)*width/10),(sin (frameCount*5)*width/10));
  push()
    translate(300, 800)
    rotate(frameCount*5);
     noFill();
     stroke("grey");
     line(40,40,10,10);
   pop()
   push()
     translate(300, 650)
     rotate(frameCount*5);
      noFill();
      stroke("grey");
      line(40,40,10,10);
    pop()
    push()
      translate(300, 500)
      rotate(frameCount*5);
       noFill();
       stroke("grey");
       line(40,40,10,10);
     pop()
     push()
       translate(300, 350)
       rotate(frameCount*5);
        noFill();
        stroke("grey");
        line(40,40,10,10);
      pop()
      push()
        translate(300, 200)
        rotate(frameCount*5);
         noFill();
         stroke("grey");
         line(40,40,10,10);
       pop()
       push()
         translate(300, 50)
         rotate(frameCount*5);
          noFill();
          stroke("grey");
          line(40,40,10,10);
        pop()
         push()
            translate(300, -100)
            rotate(frameCount*5);
             noFill();
             stroke("grey");
             line(40,40,10,10);
           pop()
           push()
             translate(300, -250)
             rotate(frameCount*5);
              noFill();
              stroke("grey");
              line(40,40,10,10);
            pop()
            push()
               translate(300, -400)
               rotate(frameCount*5);
                noFill();
                stroke("grey");
                line(40,40,10,10);
              pop()
              push()
                translate(300, -550)
                rotate(frameCount*5);
                 noFill();
                 stroke("grey");
                 line(40,40,10,10);
               pop()


translate(0,-200)
 stroke(lerpColor(color('red'), color('darkorange'),frameCount/10));
rotate(180);
 line(-width/10,0,-(cos (frameCount*5)*width/10),-(sin (frameCount*5)*width/10));

}
