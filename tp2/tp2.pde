int pantalla = 0;
long tiempoCambio;
PFont fuenteTitulo, fuenteTexto;
PImage[] fondos = new PImage[5]; 
float alphaTexto = 0;
float yTexto = 480;
int tiempoPantallas = 8000; 

void setup() {
  size(640, 480);
  
 
  fuenteTitulo = createFont("Comic Sans MS Bold", 32);
  fuenteTexto = createFont("Arial Rounded MT Bold", 24);
  
  
  fondos[0] = loadImage("TP21.jpg");
  fondos[1] = loadImage("TP22.jpg");
  fondos[2] = loadImage("TP23.jpg");
  fondos[3] = loadImage("TP24.jpg");
  fondos[4] = loadImage("TP25.gif"); 
  
  tiempoCambio = millis();
}

void draw() {
  switch(pantalla) {
    case 0: pantallaInicio(); break;
    case 1: case 2: case 3: case 4: pantallasContenido(); break;
    case 5: pantallaFinal(); break;
  }
}

void pantallaInicio() {
  background(0);
  textFont(fuenteTitulo);
  textAlign(CENTER);
  
  // Título
  alphaTexto = (sin(millis()/200.0) + 1) * 127;
  fill(255, 255, 0, alphaTexto);
  textSize(36);
  text("Las Aventuras de Tiny Toon:", width/2, 120);
  text("El tesoro escondido de Buster", width/2, 160);
  
  
  textFont(fuenteTexto);
  textSize(18);
  fill(200, 200, 0);
  text("Fue el primer videojuego basado en la serie de televisión\nTiny Toons para la consola Mega Drive", width/2, 220);
  
  // Botón de inicio
  dibujarBotonNaranja(width/2, 350, "Iniciar");
}

void pantallasContenido() {
  if(pantalla >= 1 && pantalla <=4) {
    image(fondos[pantalla-1], 0, 0, width, height);
    
    // Texto
    yTexto -= 0.3;
    float alphaTexto = (millis() % 1500)/6;
    
    textFont(fuenteTitulo);
    textSize(28);
    fill(255, 255, 0, alphaTexto);
    
    String[] textos = {
      "En la Looniversidad Acme\nBuster Bunny debe encontrar\ny derrotar a Montana Max,\nque ha robado y escondido\nun tesoro, y rescatar a Babsy Bunny",
      "¡33 niveles de diversión!\nLa dificultad aumenta\nen cada nivel\n¡Prepárate para sobrevivir\ncon tus 9 vidas!",
      "¡Corre hacia tu Sega\nmás cercano\ny únete a la aventura!",
      "¡El juego mas esperado de 1993!\n¡Jugalo ya!"
    };
    
    if(pantalla-1 < textos.length) {
      text(textos[pantalla-1], width/2, yTexto);
    }
  }
  
  if(millis() > tiempoCambio + tiempoPantallas) {
    pantalla++;
    tiempoCambio = millis();
    yTexto = 480;
  }
}

void pantallaFinal() {
  // 
  image(fondos[4], 0, 0, width, height);
  
  // Botón de reinicio
  dibujarBotonNaranja(width/2, 400, "Reiniciar");
}

void dibujarBotonNaranja(float x, float y, String texto) {
  fill(255, 165, 0);
  ellipse(x, y, 150, 150);
  fill(0);
  textFont(fuenteTexto);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(texto, x, y);
}

void mousePressed() {
  // Botón inicio
  if(pantalla == 0 && dist(mouseX, mouseY, width/2, 350) < 75) {
    pantalla = 1;
    tiempoCambio = millis();
  }
  // Botón reinicio 
  if(pantalla == 5 && dist(mouseX, mouseY, width/2, 400) < 75) {
    pantalla = 0;
  }
}
