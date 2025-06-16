// La pc no me detecta la entrada del microfono ni la camara. Intente grabar con la app DroidCam pero sale el video sin sonido. Cualquier cosa puede preguntarme en clases o veo de como poder grabarlo
PImage referencia;
color color1 = color(255, 255, 0);  // Amarillo, variables determinan color inicial
color color2 = color(0);             // Negro 
int offset;                        // variable boolean q decide si se activa el movimiento automático
boolean autoMovimiento = false;    // ajusta el desplazamiento entre filas
float tiempoInicio;               //  guarda tiempo inicial del movimiento 

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
  
  // funcion para calcular el tamaño de celda (cuadrada) 4 parametros
  int tam = calcularTamCelda(referencia.width, referencia.height, COLUMNAS, FILAS);
  
  // funcion q devuelve un valor que simula movimiento. 3 parametros
  float oscilacion = calcularOscilacion(tiempoInicio, tam, autoMovimiento);
  
  // ilusión óptica dibuja la cuadricula enteras en a de parametros de color, movimiento, posicion, etc
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
// uso dos ciclos for anidados dentro de la función pasa cada celda de la cuadrícula, fila por fila y columna por columna con sus colores
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
// estructuras de control q permiten movimiento de la fila segun la posicion del mouse en el eje Y
void mouseMoved() {
  int tam = calcularTamCelda(referencia.width, referencia.height, 8, 8);
  offset = int(map(mouseY, 0, height, 0, tam / 2));
}
// estructuras boolean q permiten el cambio de color, y el reinicio al valor inicial amarillo/negro, desplazamiento automatico con m
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
// permite cambio de color cuando presiono click derecho o izq
void mousePressed() {
  if (mouseButton == LEFT) {
    color1 = color(255, 105, 180); // Rosa
    color2 = color(200, 0, 0);     // Rojo oscuro
  } else if (mouseButton == RIGHT) {
    color1 = color(0, 102, 255);   // Azul
    color2 = color(255, 165, 0);   // Naranja
  }
}
