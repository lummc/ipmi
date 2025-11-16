class Enemigo {
    constructor(x, y, tipo, nivel) {
        this.x = x;
        this.y = y;
        this.tipo = tipo; // "icy", "darcy", "stormy", "monstruo1", "enemigo2a", etc
        this.nivel = nivel;
        this.ancho = 110;
        this.alto = 110;
        this.velocidad = 1 + nivel * 0.5;
        this.vida = 3; 
        this.direccion = 1;
    }

    actualizar() {
        // Movimiento vertical
        this.y += this.velocidad * this.direccion;
        
        // Rebotar en bordes
        if (this.y <= 0 || this.y >= height - this.alto) {
            this.direccion *= -1;
        }
    }
    
   dibujar() {
    let img = null;
    
    // Seleccionar imagen según tipo
    switch(this.tipo) {
        case "icy": img = imgIcy; break;
        case "darcy": img = imgDarcy; break;
        case "stormy": img = imgStormy; break;
        case "monstruo1": img = imgMonstruo1; break;
        case "enemigo2a": img = imgEnemigo2a; break;
        case "enemigo2b": img = imgEnemigo2b; break;
        case "enemigo2c": img = imgEnemigo2c; break;
        case "darkar": img = imgDarkar; break;  
      
    }
    
    if (img) {
        image(img, this.x, this.y, this.ancho, this.alto);
    } 
    
 
    fill(255);
    stroke(0);
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("HP:" + this.vida, this.x + this.ancho/2, this.y + this.alto + 10);
}
    
    disparar() {
        return new ProyectilEnemigo(this.x, this.y + this.alto/2 - 5, this.tipo);
    }
    
    recibirDanio(cantidad) {
        this.vida -= cantidad;
    }
}

