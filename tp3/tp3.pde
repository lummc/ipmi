// La pc no me detecta la entrada del microfono ni la camara. Intente grabar con la app DroidCam pero sale el video sin sonido. Cualquier cosa puede preguntarme en clases o veo de como poder grabarlo
PImage referencia;
color color1 = color(255, 255, 0);  // Amarillo 
color color2 = color(0);             // Negro 
int offset;
boolean autoMovimiento = false;
float tiempoInicio;

void setup() {
  size(800, 400);
  referencia = loadImage("F_32.jpg");
  referencia.resize(400, 400);
  tiempoInicio = millis();
}

void draw() {
  background(255);
  image(referencia, 0, 0);
  
  // Cantidad filas/columnas 
  final int COLUMNAS = 8;
  final int FILAS = 8;
  
  // Tamaño de celda
  int tam = calcularTamCelda(referencia.width, referencia.height, COLUMNAS, FILAS);
  
  // Oscilación basada en tiempo transcurrido
  float oscilacion = calcularOscilacion(tiempoInicio, tam, autoMovimiento);
  
  // Ilusión óptica
  dibujarIlusion(400, 0, tam, offset, color1, color2, COLUMNAS, FILAS, oscilacion);
}

// Calculamos tamaño de celda  4 parametros 
int calcularTamCelda(int anchoImg, int altoImg, int columnas, int filas) {
  return int(min(anchoImg / (float)columnas, altoImg / (float)filas));
}

// Funcion c on parametro q devuelve valor mov.
float calcularOscilacion(float inicio, int tamCelda, boolean activo) {
  if (!activo) return 0;
  float tiempoTranscurrido = millis() - inicio;
  return sin(tiempoTranscurrido * 0.001) * (tamCelda / 4);
}

void dibujarIlusion(
    float xInicio, 
    float yInicio, 
    int tam, 
    int desfase, 
    color c1, 
    color c2, 
    int columnas, 
    int filas,
    float oscilacion
) {
  for (int fila = 0; fila < filas; fila++) {
    for (int col = 0; col < columnas; col++) {
      // Posición con efecto de oscilación
      float despl = (fila % 2 == 0) ? 0 : desfase;
      float x = xInicio + col * tam + despl + oscilacion;
      float y = yInicio + fila * tam;
      
      // Color base
      color base = ((col + fila) % 2 == 0) ? c1 : c2;
      
      // Oscurecer color
      fill(red(base) * 0.8, green(base) * 0.8, blue(base) * 0.8);
      noStroke();
      rect(x, y, tam, tam);
    }
  }
}

void mouseMoved() {
  int tam = calcularTamCelda(referencia.width, referencia.height, 8, 8);
  offset = int(map(mouseY, 0, height, 0, tam / 2));
}
// estructuras boolean q permiten el cambio de color.
void keyPressed() {
  if (key == 'r' || key == 'R') {
    // Reiniciar valores
    color1 = color(255, 255, 0);
    color2 = color(0);
    autoMovimiento = false;
    tiempoInicio = millis();
  } else if (key == 'm' || key == 'M') {
    autoMovimiento = !autoMovimiento;
    tiempoInicio = millis();
  } else if (keyCode == UP) {
    color1 = color(50, 205, 50);   // Verde
    color2 = color(128, 0, 128);   // Morado
  } else if (keyCode == DOWN) {
    color1 = color(0, 255, 255);   // Cyan
    color2 = color(255, 0, 255);   // Magenta
  }
}

void mousePressed() {
  if (mouseButton == LEFT) {
    color1 = color(255, 105, 180); // Rosa
    color2 = color(200, 0, 0);     // Rojo oscuro
  } else if (mouseButton == RIGHT) {
    color1 = color(0, 102, 255);   // Azul
    color2 = color(255, 165, 0);   // Naranja
  }
}
