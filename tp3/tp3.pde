// https://youtu.be/sUdTrb6zA9o
PImage imagen;

void setup() {
  size(800, 400);
  imagen = loadImage("F_32.jpg");
  imagen.resize(400, 400);
}
void draw() {
  background(255);
  image(imagen, 0, 0);  
  int columnas = 8;
  int filas = 8;
  int tam = calcularTamanio(400, 400, columnas, filas);
  int desplazamiento = moverFila(mouseY, height, tam);

  color c1 = colorPrimario();
  color c2 = colorSecundario();

  // inclinación de filas
  dibujarCuadrosInclinados(400, 0, tam, desplazamiento, c1, c2, columnas, filas);
}

int calcularTamanio(int ancho, int alto, int col, int fil) {
  return int(min(ancho / float(col), alto / float(fil)));
}

int moverFila(int mouseY, int alto, int tam) {
  return int(map(mouseY, 0, alto, 0, tam / 2));
}
void dibujarCuadrosInclinados(float xIni, float yIni, int tam, int desp, color col1, color col2, int col, int fil) {
  for (int f = 0; f < fil; f++) {
    for (int c = 0; c < col; c++) {
      float mover = (f % 2 == 0) ? 0 : desp;
      float x = xIni + c * tam + mover;
      float y = yIni + f * tam;
      float d = dist(c, f, col / 2.0, fil / 2.0);
      float maxAngulo = QUARTER_PI / 5;  
      float anguloBase = map(d, 0, sqrt(col * col + fil * fil), -maxAngulo, maxAngulo);

      float factorFila = 1 + 0.1 * f;  
      float angulo = anguloBase * factorFila;

      push();
      translate(x + tam / 2, y + tam / 2);
      rotate(angulo);
      if ((f + c) % 2 == 0) {
        fill(col1);
      } else {
        fill(col2);
      }
      noStroke();
      rectMode(CENTER);
      rect(0, 0, tam, tam);
      pop();
    }
  }
}
color colorPrimario() {
  if (keyPressed) {
    if (key == 'r' || key == 'R') return color(255, 255, 0); //amarillo
    if (keyCode == UP) return color(50, 205, 50); //verde
    if (keyCode == DOWN) return color(0, 255, 255);//celeste
  }
  if (mousePressed) {
    if (mouseButton == LEFT) return color(255, 105, 180); //rosa
    if (mouseButton == RIGHT) return color(0, 102, 255); //azul
  }
  return color(255, 255, 0); 
}

color colorSecundario() {
  if (keyPressed) {
    if (key == 'r' || key == 'R') return color(0); //negro
    if (keyCode == UP) return color(128, 0, 128); //morado
    if (keyCode == DOWN) return color(255, 0, 255); //magenta
  }
  if (mousePressed) {
    if (mouseButton == LEFT) return color(200, 0, 0); //rojo
    if (mouseButton == RIGHT) return color(255, 165, 0); //naranja
  }
  return color(0);
}

