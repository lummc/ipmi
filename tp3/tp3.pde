PImage referencia;
color color1, color2;
int offset;
int tam;

void setup() {
  size(800, 400);
  referencia = loadImage("F_32.jpg");
  referencia.resize(400, 400);
  color1 = color(255, 255, 0); // Amarillo
  color2 = color(0);           // Negro
}

void draw() {
  background(255);
  image(referencia, 0, 0);

  int columnas = 8;
  int filas = 8;
  float tamX = referencia.width / (float)columnas;
  float tamY = referencia.height / (float)filas;
  tam = int(min(tamX, tamY));

  dibujarIlusion(400, 0, tam, offset, filas, columnas);
}

// FUNCIÓN QUE RETORNA VALOR (NUEVA)
color generarColorModulado(color base, float factor) {
  float r = red(base) * factor;
  float g = green(base) * factor;
  float b = blue(base) * factor;
  return color(r, g, b);
}

void dibujarIlusion(float origenX, float origenY, int tam, int desfasaje, int filas, int columnas) {
  for (int j = 0; j < filas; j++) {
    for (int i = 0; i < columnas; i++) {
      float x = origenX + i * tam + ((j % 2 == 0) ? 0 : desfasaje);
      float y = origenY + j * tam;
      
      // Modifica colores usando función con retorno
      color actual = (i + j) % 2 == 0 ? color1 : color2;
      color modulado = generarColorModulado(actual, 0.8); // Oscurece 20%
      
      fill(modulado);
      noStroke();
      rect(x, y, tam, tam);
    }
  }
}

// Eventos (sin cambios)
void mousePressed() {
  if (mouseButton == LEFT) {
    color1 = color(255, 105, 180); // Rosa
    color2 = color(200, 0, 0);     // Rojo oscuro
  } else if (mouseButton == RIGHT) {
    color1 = color(0, 102, 255);   // Azul
    color2 = color(255, 165, 0);   // Naranja
  }
}

void mouseMoved() {
  offset = int(map(mouseY, 0, height, 0, tam / 2));
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    offset = 0;
    color1 = color(255, 255, 0); // Restaura amarillo
    color2 = color(0);           // Restaura negro
  }
}
