class Jugador {
    constructor(x, y, tipo) {
        this.x = x;
        this.y = y;
        this.tipo = tipo; // "stella" o "flora"
        this.ancho = 110;
        this.alto = 110;
        this.velocidad = 5;
        this.vida = 5;
        this.vidaMaxima = 5;
    }
    
    actualizar() {
        // Movimiento con flechas
        if (keyIsDown(UP_ARROW) && this.y > 0) {
            this.y -= this.velocidad;
        }
        if (keyIsDown(DOWN_ARROW) && this.y < height - this.alto) {
            this.y += this.velocidad;
        }
    }
    
  dibujar() {
    
    if (this.tipo == "stella" && imgStella) {
        image(imgStella, this.x, this.y, this.ancho, this.alto);
    } else if (this.tipo == "flora" && imgFlora) {
        image(imgFlora, this.x, this.y, this.ancho, this.alto);
    } 
}
    disparar() {
    return new Proyectil( this.x + this.ancho, this.y + this.alto / 2 - 5, this.tipo);
}
     
    recibirDanio(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
}
