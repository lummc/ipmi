// https://youtu.be/sUdTrb6zA9o
PImage referencia;

void setup() {
  size(800, 400);
  referencia = loadImage("F_32.jpg");
  referencia.resize(400, 400);
}

void draw() {
  background(255);
  image(referencia, 0, 0);

  int columnas = 8;
  int filas = 8;
  int tam = calcularTamanio(400, 400, columnas, filas);  // función que retorna
  int desplazamiento = calcularDesplazamiento(mouseY, height, tam);

  // colores en función de posición o mouse 
  color c1 = elegirColorPrincipal();
  color c2 = elegirColorSecundario();

  dibujarCuadricula(400, 0, tam, desplazamiento, c1, c2, columnas, filas);
}

// función con retorno
int calcularTamanio(int ancho, int alto, int col, int fil) {
  return int(min(ancho / float(col), alto / float(fil)));
}

//  función con retorno usando map
int calcularDesplazamiento(int mouseY, int altoPantalla, int tamano) {
  return int(map(mouseY, 0, altoPantalla, 0, tamano / 2));
}

// función propia con parámetros
void dibujarCuadricula(float xInicio, float yInicio, int tam, int desp, color c1, color c2, int col, int fil) {
  for (int fila = 0; fila < fil; fila++) {
    for (int columna = 0; columna < col; columna++) {
      float mover = (fila % 2 == 0) ? 0 : desp;
      float x = xInicio + columna * tam + mover;
      float y = yInicio + fila * tam;

      if ((fila + columna) % 2 == 0) {
        fill(c1);
      } else {
        fill(c2);
      }

      noStroke();
      rect(x, y, tam, tam);
    }
  }
}

// determinar color según tecla
color elegirColorPrincipal() {
  if (keyPressed) {
    if (key == 'r' || key == 'R') {
      return color(255, 255, 0);  // amarillo
    } else if (keyCode == UP) {
      return color(50, 205, 50);  // verde
    } else if (keyCode == DOWN) {
      return color(0, 255, 255);  // celeste
    }
  }

  if (mousePressed) {
    if (mouseButton == LEFT) {
      return color(255, 105, 180);  // rosa
    } else if (mouseButton == RIGHT) {
      return color(0, 102, 255);    // azul
    }
  }

  return color(255, 255, 0);  
}

color elegirColorSecundario() {
  if (keyPressed) {
    if (key == 'r' || key == 'R') {
      return color(0);              // negro
    } else if (keyCode == UP) {
      return color(128, 0, 128);    // morado
    } else if (keyCode == DOWN) {
      return color(255, 0, 255);    // magenta
    }
  }

  if (mousePressed) {
    if (mouseButton == LEFT) {
      return color(200, 0, 0);      // rojo oscuro
    } else if (mouseButton == RIGHT) {
      return color(255, 165, 0);    // naranja
    }
  }

  return color(0);  
}
