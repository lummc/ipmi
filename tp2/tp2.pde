PFont fuente;
PImage img1;
PImage img2;
PImage img3;
PImage img4;
int pantalla = 0;
float yTexto = 480;
float xTexto = 0;
int tiempoInicio = 0;
int opacidad = 255;
void setup() {
  size(640, 480);
  frameRate(30);
  fuente = createFont("Arial Bold", 20);
  textFont(fuente);
  textAlign(CENTER);
  img1 = loadImage("TP1.jpg");
  img2 = loadImage("TP2.jpg");
  img3 = loadImage("TP3.jpg");
  img4 = loadImage("TP4.jpg");
  tiempoInicio = frameCount;
}
void draw() {
  background(0);
  if (frameCount % 60 < 30) {
    opacidad = 255;
  } else {
    opacidad = 100;
  }
  if (pantalla == 0) {
    image(img1, 0, 0, width, height);
    fill(255, 255, 0, opacidad);
    text("¡bienvenido a la aventura un viaje retro, Tiny Toon Adventures :))!", width / 2, yTexto);
    yTexto -= 0.5;  // texto sube

  } else if (pantalla == 1) {
    image(img2, 0, 0, width, height);
    fill(0, 255, 255, opacidad);
    text("Vence al Dr. Gene Splicer y Max Montana piu piu piu", xTexto, height / 2);
    xTexto += 1;  // texto entra desde la izquierda
  } else if (pantalla == 2) {
    image(img3, 0, 0, width, height);
    fill(0, 255, 255, opacidad);
    text("Rescata a Babsy Bunny y a tus amigos!!!!!NOW!!", width / 2, yTexto);
   yTexto -= 0.5;
  } else if (pantalla == 3) {
    image(img4, 0, 0, width, height);
    fill(255, 165, 0);
    ellipse(width / 2, 400, 150, 150);
    fill(0);
    textSize(16);
    text("Reiniciar", width / 2, 400);
  }
  if (frameCount - tiempoInicio > 280 && pantalla < 3) {
    avanzarPantalla();
  }
}
void keyPressed() {
  // si se toca espacio, se adelanta pantalla
  if (key == ' ') {
    avanzarPantalla();
  }
}
void mousePressed() {
  float distancia = dist(mouseX, mouseY, width / 2, 400);
  if (pantalla == 3 && distancia < 75) {
    pantalla = 0;
    tiempoInicio = frameCount;
    yTexto = 480;
    xTexto = 0;
  }
}
void avanzarPantalla() {
  pantalla++;
  tiempoInicio = frameCount;
  yTexto = 480;
  xTexto = 0;
}

