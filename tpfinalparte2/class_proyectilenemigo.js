class ProyectilEnemigo {
    constructor(x, y, tipoEnemigo) {
        this.x = x;
        this.y = y;
        this.tipoEnemigo = tipoEnemigo;
        this.ancho = 25;
        this.alto = 20;
        this.velocidad = 10;
    }
    
    actualizar() {
        this.x -= this.velocidad;
    }
    
    dibujar() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.x, this.y, this.ancho, this.alto);
    }
}
