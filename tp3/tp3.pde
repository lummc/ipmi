// https://youtu.be/sUdTrb6zA9o
// https://youtu.be/JCCxhi8h8Sk?si=wklhZpJsk-vOSQH7
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
  color c1 = colorPrincipal();
  color c2 = colorSecundario();
  dibujarCuadrosInclinados(400, 0, tam, desplazamiento, c1, c2, columnas, filas);
}

void dibujarCuadrosInclinados(float xIni, float yIni, int tam, int desp, color col1, color col2, int col, int fil) {
  for (int f = 0; f < fil; f++) {
    for (int c = 0; c < col; c++) {
      float mover = (f % 2 == 0) ? 0 : desp;
      float x = xIni + c * tam + mover;
      float y = yIni + f * tam;
      float d = dist(c, f, col / 2.0, fil / 2.0);
      float angulo = map(d, 0, sqrt(col * col + fil * fil), -QUARTER_PI / 8, QUARTER_PI / 8);

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

int calcularTamanio(int ancho, int alto, int col, int fil) {
  return int(min(ancho / float(col), alto / float(fil)));
}

int moverFila(int mouseY, int alto, int tam) {
  return int(map(mouseY, 0, alto, 0, tam / 2));
}

color colorPrincipal() {
  if (keyPressed) {
    if (key == 'r' || key == 'R') return color(255, 255, 0);
    if (keyCode == UP) return color(50, 205, 50);
    if (keyCode == DOWN) return color(0, 255, 255);
  }
  if (mousePressed) {
    if (mouseButton == LEFT) return color(255, 105, 180);
    if (mouseButton == RIGHT) return color(0, 102, 255);
  }
  return color(255, 255, 0);
}

color colorSecundario() {
  if (keyPressed) {
    if (key == 'r' || key == 'R') return color(0);
    if (keyCode == UP) return color(128, 0, 128);
    if (keyCode == DOWN) return color(255, 0, 255);
  }
  if (mousePressed) {
    if (mouseButton == LEFT) return color(200, 0, 0);
    if (mouseButton == RIGHT) return color(255, 165, 0);
  }
  return color(0);
}
