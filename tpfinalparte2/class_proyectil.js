class Proyectil {
    constructor(x, y, tipo, tipoJugador) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.tipoJugador = tipoJugador;
        this.ancho = 70;
        this.alto = 70;
        this.velocidad = 8;
    }
    
    actualizar() {
        this.x += this.velocidad;
    }
    
    dibujar() {
    if (this.tipo == "stella") {
        image(imgRayo, this.x - this.ancho/2, this.y - this.alto/2, this.ancho, this.alto);
    } else {
        image(imgHoja, this.x - this.ancho/2, this.y - this.alto/2, this.ancho, this.alto);
    }
}
}
