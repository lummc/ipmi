PFont fuente;
PImage img1;
PImage img2;
PImage img3;
PImage img4;

int pantalla = 0;
float yTexto = 480;
int tiempoInicio = 0;

void setup() {
  size(640, 480);
  frameRate(30);

  fuente = createFont("Arial Bold", 28);
  textFont(fuente);
  textAlign(CENTER);

  //img
  img1 = loadImage("TP1.jpg");
  img2 = loadImage("TP2.jpg");
  img3 = loadImage("TP3.jpg");
  img4 = loadImage("TP4.jpg");

  tiempoInicio = frameCount;  // inicio del frameCount
}

void draw() {
  background(0);

  // pantalla según el valor de la variable
  if (pantalla == 0) {
    image(img1, 0, 0, width, height);
    fill(255, 255, 0);
    text("¡Bienvenido a la aventura, Tiny Toon Adventures!", width / 2, yTexto);
  } 
  
  else if (pantalla == 1) {
    image(img2, 0, 0, width, height);
    fill(255, 255, 0);
    text("Explorá mundos increíbles y rescata a tus amigos", width / 2, yTexto);
  } 
  
  else if (pantalla == 2) {
    image(img3, 0, 0, width, height);
    fill(255, 255, 0);
    text("¡Desafíos y diversión asegurada!¡Rescata a Babsy Bunny!", width / 2, yTexto);
  } 
  
  else if (pantalla == 3) {
    image(img4, 0, 0, width, height);

    // Dibujo del botón final
    fill(255, 165, 0);
    ellipse(width / 2, 400, 150, 150);
    
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2, 400);
  }

  if (pantalla < 3) {
    yTexto = yTexto - 0.5;
  }

  if (frameCount - tiempoInicio > 180 && pantalla < 3) {
    pantalla = pantalla + 1;
    tiempoInicio = frameCount;
    yTexto = 480;
  }
}

void mousePressed() {
  float distancia = dist(mouseX, mouseY, width / 2, 400);
  if (pantalla == 3 && distancia < 75) {
    pantalla = 0;
    tiempoInicio = frameCount;
    yTexto = 480;
  }
}
