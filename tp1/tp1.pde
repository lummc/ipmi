PImage miObjetoFavorito;

void setup() {
  size(800, 400);
  miObjetoFavorito = loadImage("Prfrancesa.jpg");
  colorMode(HSB, 360, 100, 100);
  
}

void draw() {
  background(360, 0, 100); // White Background HSB
  
  image(miObjetoFavorito, 0, 0, 400, 400);
  // Contenedor de vidrio c/ pico
  noStroke();    
  fill(185, 20, 87, 80);
  rect(505, 75, 145, 300); 
  triangle(506, 86, 474, 103, 507, 130);
  
  stroke(89, 83, 64);
  strokeWeight(1);
  fill(84, 65, 86);
  
  stroke(84, 73, 84);
  strokeWeight(2);
  rect(498, 290, 160, 90);
  //  Tapa prensa
  stroke(84, 73, 84);
  strokeWeight(2);
  ellipse(577, 75, 160, 40);
  strokeWeight(1);
  circle(579, 45, 40);
  
  
 
 stroke(30, 100, 100, 0);
  line(655, 65, 770, 50);
   line(660, 340, 705, 340); 
  
fill(84, 65, 86); //
 stroke(84, 73, 84);
  beginShape();
   vertex(650, 65); 
    bezierVertex(770, 60, 720, 340, 660, 340); 
     vertex(660, 295); 
      bezierVertex(720, 290, 720, 60, 650, 80); 
       endShape(CLOSE);
  
noStroke();
 fill(25, 80, 40); 
  stroke(25, 70, 40);
   line(505, 160,  650, 160);
    fill(25, 70, 40);

stroke(40, 70, 70); 
  strokeWeight(7);
  line(505, 160, 650, 160);
stroke(43, 27, 90);
  line(505, 153,  648, 153);
noStroke();
  fill(25, 70, 40); 
  rect(505, 160, 145, 130);  
  
 fill(30, 40, 100, 40);
  ellipse(580, 200, 100, 40);
   ellipse(530, 220, 50, 20);
  
 strokeWeight(2);
  stroke(84, 73, 84);
   fill(88, 67, 99); 
    rect(485, 360, 190, 30); 
  
  noFill();
   stroke(200, 30); 
    strokeWeight(1.5);  
     bezier(520, 160, 515, 120, 525, 100, 525, 90);
      bezier(620, 160, 625, 130, 615, 90, 615, 90);
  
  
  
  println( mouseX + " / " + mouseY );
}
 


void drawDivider() {

  stroke(0);
  strokeWeight(1);
  line(400, 0, 400, 400);
}

void mouseMoved() {  
 
  stroke(0, 50); 
  strokeWeight(1);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
}
 
