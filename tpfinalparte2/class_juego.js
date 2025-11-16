class Juego {
    constructor() {
        this.estado = "inicio"; 
        this.nivel = 1;
        this.puntaje = 0;
        this.jugador = null;
        this.enemigos = [];
        this.proyectiles = [];
        this.proyectilesEnemigos = [];
        this.tiempoUltimoDisparo = 0;
        this.enemigosEliminados = 0;
        this.enemigosPorNivel = 4; 
    }
    
    iniciarNivel() {
        this.enemigos = [];
        this.proyectiles = [];
        this.proyectilesEnemigos = [];
        this.enemigosEliminados = 0;
        
        if (this.nivel == 1) {
            //  stella
            this.jugador = new Jugador(100, height/2, "stella");
            // enemigos nivel 1
            this.crearEnemigosNivel1();
        } else if (this.nivel == 2) {
            // flora
            this.jugador = new Jugador(100, height/2, "flora");
            // enemigos nivel 2
            this.crearEnemigosNivel2();
        }
    }
    
    crearEnemigosNivel1() {
       
        for (let i = 0; i < 1; i++) {
            this.enemigos.push(new Enemigo(width - 100, 100 + i * 80, "icy", 1));
            this.enemigos.push(new Enemigo(width - 100, 250 + i * 80, "darcy", 1));
        }
        for (let i = 0; i < 1; i++) {
            this.enemigos.push(new Enemigo(width - 200, 100 + i * 100, "stormy", 1));
            this.enemigos.push(new Enemigo(width - 200, 300 + i * 100, "monstruo1", 1));
        }
    }
    
    crearEnemigosNivel2() {
     
        for (let i = 0; i < 1; i++) {
            this.enemigos.push(new Enemigo(width - 100, 80 + i * 90, "enemigo2a", 2));
            this.enemigos.push(new Enemigo(width - 100, 260 + i * 90, "enemigo2b", 2));
        }
        for (let i = 0; i < 1; i++) {
            this.enemigos.push(new Enemigo(width - 200, 120 + i * 110, "enemigo2c", 2));
            this.enemigos.push(new Enemigo(width - 200, 320 + i * 110, "darkar", 3));
        }
    }
    
    actualizar() {
        if (this.estado == "nivel1" || this.estado == "nivel2") {
            // Act jugador
            this.jugador.actualizar();
            
            // Act proyectiles del jugador
            for (let i = this.proyectiles.length - 1; i >= 0; i--) {
                this.proyectiles[i].actualizar();
                
                // eiminar si sale de pantalla
                if (this.proyectiles[i].x > width) {
                    this.proyectiles.splice(i, 1);
                    continue;
                }
                
                // verificar colision con enemgos
                for (let j = this.enemigos.length - 1; j >= 0; j--) {
                    if (this.proyectiles[i] && this.colision(this.proyectiles[i], this.enemigos[j])) {
                        this.enemigos[j].recibirDanio(1);
                        this.proyectiles.splice(i, 1);
                        
                        // s enemigo muere
                        if (this.enemigos[j].vida <= 0) {
                            this.puntaje += 10;
                            this.enemigosEliminados++;
                            this.enemigos.splice(j, 1);
                        }
                        break;
                    }
                }
            }
            
            // actualizar enemigos
            for (let i = this.enemigos.length - 1; i >= 0; i--) {
                this.enemigos[i].actualizar();
                
                // Enemigos disparan
                if (frameCount % 90 == 0) {
                    let proy = this.enemigos[i].disparar();
                    if (proy) {
                        this.proyectilesEnemigos.push(proy);
                    }
                }
            }
            
            // acctualizar proyectiles enemigos
            for (let i = this.proyectilesEnemigos.length - 1; i >= 0; i--) {
                this.proyectilesEnemigos[i].actualizar();
                
                // eliminar si sale de pantalla
                if (this.proyectilesEnemigos[i].x < 0) {
                    this.proyectilesEnemigos.splice(i, 1);
                    continue;
                }
                
                // verificar colision con jugador
                if (this.colision(this.proyectilesEnemigos[i], this.jugador)) {
                    this.jugador.recibirDanio(1);
                    this.proyectilesEnemigos.splice(i, 1);
                    
                    // si jugador muere
                    if (this.jugador.vida <= 0) {
                        this.estado = "gameover";
                    }
                }
            }
            
        
            if (this.enemigosEliminados >= this.enemigosPorNivel) {
                if (this.nivel == 1) {
                    this.nivel = 2;
                    this.estado = "nivel2";
                    this.iniciarNivel();
                } else {
                    this.estado = "victoria";
                }
            }
        }
    }
    
    colision(obj1, obj2) {
        return obj1.x < obj2.x + obj2.ancho &&
               obj1.x + obj1.ancho > obj2.x &&
               obj1.y < obj2.y + obj2.alto &&
               obj1.y + obj1.alto > obj2.y;
    }
    
    dibujar() {
        if (this.estado == "inicio") {
            this.dibujarInicio();
        } else if (this.estado == "instrucciones") {
            this.dibujarInstrucciones();
        } else if (this.estado == "nivel1" || this.estado == "nivel2") {
            this.dibujarNivel();
        } else if (this.estado == "victoria") {
            this.dibujarVictoria();
        } else if (this.estado == "gameover") {
            this.dibujarGameOver();
        } else if (this.estado == "creditos") {
            this.dibujarCreditos();
        }
    }
    
    dibujarInicio() {
         image(fondoInicio, 0, 0, width, height);;
        
        stroke(255);   
        strokeWeight(3);
        fill(255, 60, 99);
        textFont(fuenteTitulos);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("RESCATE DE BLOOM", width/2, 100);
        
        textSize(24);
        fill(255);
        stroke(255, 60, 99);   
        strokeWeight(3);
        text("Aventura Winx", width/2, 150);
        
   
        this.dibujarBoton(width/2 - 100, 250, 200, 50, "JUGAR");
        this.dibujarBoton(width/2 - 100, 320, 200, 50, "INSTRUCCIONES");
        this.dibujarBoton(width/2 - 100, 390, 200, 50, "CRÉDITOS");
    }
    
    dibujarInstrucciones() {
        image(fondoInstrucciones, 0, 0, width, height);
        
        fill(255, 215, 0);
        textFont(fuenteTitulos);
        textAlign(CENTER, TOP);
        textSize(32);
        stroke(255);   
        strokeWeight(3);
        text("INSTRUCCIONES", width/2, 30);
        
        fill(255);
        textSize(16);
        textAlign(LEFT, TOP);
        textFont("Arial");
        stroke(255, 60, 99);   
        strokeWeight(3);
        text("🎮 CONTROLES:", 80, 100);
        text("• Flechas ↑↓ - Mover hadas", 100, 130);
        text("• ESPACIO - Disparar magia", 100, 160);
        text("• R - Reiniciar el juego", 100, 190);
        
        text("🎯 OBJETIVO:", 80, 240);
        text("• Nivel 1: Stella debe derrotar 4 enemigos", 100, 270);
        text("• Nivel 2: Flora debe derrotar 4 enemigos", 100, 300);
        text("• Rescata a Bloom de Darkar", 100, 330);
        
        text("❤️ VIDA:", 80, 370);
        text("• Tienes 5 corazones de vida", 100, 400);
        text("• ¡Evita los ataques enemigos!", 100, 430);
        
        textFont(fuenteTitulos);
        this.dibujarBoton(width/2 - -150, 420, 150, 40, "VOLVER");
    }
    
    dibujarNivel() { 
      
    if (this.nivel == 1 && fondoAlfea) {
        image(fondoAlfea, 0, 0, width, height);
    } 
    else if (this.nivel == 2 && fondoOscuro) {
        image(fondoOscuro, 0, 0, width, height);
    } 
    else {
        background(50);
    }
        
      
        this.jugador.dibujar();
        
    
        for (let enemigo of this.enemigos) {
            enemigo.dibujar();
        }
        
        for (let proy of this.proyectiles) {
            proy.dibujar();
        }
        
        for (let proy of this.proyectilesEnemigos) {
            proy.dibujar();
        }
        
        
        this.dibujarHUD();
    }
    
    dibujarHUD() {
       
        fill(255); 
        textFont(fuenteTitulos);
        textAlign(LEFT, TOP);
        textSize(18);
        text("Vida:", 10, 10);
        for (let i = 0; i < this.jugador.vida; i++) {
            fill(255, 0, 100);
            textFont("Arial");
            text("❤", 70 + i * 25, 10);
        }
        
       
        fill(255);
        textFont(fuenteTitulos);
        text("Puntaje: " + this.puntaje, 10, 40);
        
      
        
        text("nivel: " + this.nivel, 10, 70);
        
       
        text("Enemigo: " + (this.enemigosPorNivel - this.enemigosEliminados), 10, 100);
        
        // Personaje
        if (this.nivel == 1) {
            fill(255, 215, 0);
            textSize(25);
            textFont(fuenteTitulos);
            text("Stella", width - 100, 10);
        } else {
            fill(0, 255, 100);
            textFont(fuenteTitulos);
            textSize(25);
            text("Flora", width - 100, 10);
        }
    }
    
    dibujarVictoria() {
        image(fondoVictoria, 0, 0, width, height);
        stroke(255, 215, 0);   
        strokeWeight(3);
        fill(90, 185, 240);
        textFont(fuenteTitulos);
        textAlign(CENTER, CENTER);
        textSize(55);
        text("¡VICTORIA!", width/2, 100);
        
        fill(255, 105, 180);
        textSize(30);
        text("¡Bloom ha sido rescatada!", width/2, 160);
        
        fill(255);
        textSize(25);
        text("Puntaje Final: " + this.puntaje, width/2, 220);
        
        this.dibujarBoton(width/2 - 100, 300, 200, 50, "JUGAR DE NUEVO");
        this.dibujarBoton(width/2 - 100, 370, 200, 50, "MENÚ");
    }
    
    dibujarGameOver() {
        image(fondoDerrota, 0, 0, width, height);
        
        fill(255);
        stroke(290, 86, 65);   
        strokeWeight(3);
        textFont(fuenteTitulos);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("¡GAME OVER!", width/2, 120);
        
        textSize(24);
        text("Bloom sigue atrapada...", width/2, 180);
        
        textSize(20);
        text("Puntaje: " + this.puntaje, width/2, 240);
        
        this.dibujarBoton(width/2 - 100, 300, 200, 50, "REINTENTAR");
        this.dibujarBoton(width/2 - 100, 370, 200, 50, "MENÚ");
    }
    
    dibujarCreditos() {
        image(fondoCreditos, 0, 0, width, height);
        stroke(90, 185, 240);   
        strokeWeight(3);
        fill(255, 215, 0);
        textAlign(CENTER, TOP);
        textSize(36);
        text("CRÉDITOS", width/2, 40);
        
        fill(255);
        textSize(18);
        text("By:", width/2, 120);
        text("Lucas Meza", width/2, 150);
        
        textSize(16);
        text("Basado en: Winx Club", width/2, 220);
        text("Creador: Iginio Straffi", width/2, 250);
        
        textSize(14);
        text("Trabajo Práctico Final Season 2", width/2, 320);
        text("PMIW- 2025", width/2, 345);
        
        this.dibujarBoton(width/2 - 100, 400, 200, 50, "VOLVER");
    }
    
    dibujarBoton(x, y, w, h, texto) {
        //hover
        let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
        
        if (hover) {
            fill(255, 105, 180);
            stroke(255, 255, 100);
            strokeWeight(3);
        } else {
            fill(147, 51, 234);
            stroke(255);
            strokeWeight(2);
        }
        
        rect(x, y, w, h, 10);
        
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(18);
        text(texto, x + w/2, y + h/2);
    }
    
    manejarClick() {
    if (this.estado == "inicio") {
        // jjgar
        if (this.clickEnBoton(width/2 - 100, 250, 200, 50)) {
            this.nivel = 1;
            this.puntaje = 0;
            this.estado = "nivel1";
            this.iniciarNivel();
            cambiarMusica("nivel");
        }
        // iinstrucciones
        if (this.clickEnBoton(width/2 - 100, 320, 200, 50)) {
            this.estado = "instrucciones";
            cambiarMusica("menu");
        }
        // creditos
        if (this.clickEnBoton(width/2 - 100, 390, 200, 50)) {
            this.estado = "creditos";
            cambiarMusica("menu");
        }
    } else if (this.estado == "instrucciones") {
        if (this.clickEnBoton(width/2 + 150, 420, 200, 40)) {
            this.estado = "inicio";
            cambiarMusica("menu");
        }
    } else if (this.estado == "creditos") {
        if (this.clickEnBoton(width/2 - 100, 400, 200, 50)) {
            this.estado = "inicio";
            cambiarMusica("menu");
        }
    } else if (this.estado == "victoria" || this.estado == "gameover") {
        // boton reintenntar
        if (this.clickEnBoton(width/2 - 100, 300, 200, 50)) {
            this.nivel = 1;
            this.puntaje = 0;
            this.estado = "nivel1";
            this.iniciarNivel();
            cambiarMusica("nivel");
        }
        // boton Menu
        if (this.clickEnBoton(width/2 - 100, 370, 200, 50)) {
            this.estado = "inicio";
            cambiarMusica("menu");
        }
    }
}  
    
    clickEnBoton(x, y, w, h) {
        return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
    }
    
    disparar() {
        //cadencia de disparo
        if (millis() - this.tiempoUltimoDisparo > 300) {
            let proy = this.jugador.disparar();
            if (proy) {
                this.proyectiles.push(proy);
                this.tiempoUltimoDisparo = millis();
            }
        }
    }
    
    reiniciar() {
        this.nivel = 1;
        this.puntaje = 0;
        this.estado = "nivel1";
        this.iniciarNivel();
    }
}
