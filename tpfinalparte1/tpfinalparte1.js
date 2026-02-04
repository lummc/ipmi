let imagenes = [];
let estado = 0;  
let musicFondo;


let botonesX = [];
let botonesY = [];
let botonesAncho = [];
let botonesAlto = [];
let botonesTexto = [];
let botonesDestino = [];


function preload() {
  
    for (let i = 1; i <= 22; i++) {
        imagenes[i] = loadImage('data/winx' + i + '.png');
    }
    musicFondo = loadSound('data/music.mp3');
}

function setup() {
    createCanvas(640, 480);
    musicFondo.setVolume(1.0);
    crearBotones();
}


function draw() {
   
    if (estado == 0) {
        dibujarPantalla0();
    } else if (estado == 1) {
        dibujarPantalla1();
    } else if (estado == 2) {
        dibujarPantalla2();
    } else if (estado == 3) {
        dibujarPantalla3();
    } else if (estado == 4) {
        dibujarPantalla4();
    } else if (estado == 5) {
        dibujarPantalla5();
    } else if (estado == 6) {
        dibujarPantalla6();
    } else if (estado == 7) {
        dibujarPantalla7();
    } else if (estado == 8) {
        dibujarPantalla8();
    } else if (estado == 9) {
        dibujarPantalla9();
    } else if (estado == 10) {
        dibujarPantalla10();
    } else if (estado == 11) {
        dibujarPantalla11();
    } else if (estado == 12) {
        dibujarPantalla12();
    } else if (estado == 13) {
        dibujarPantalla13();
    } else if (estado == 14) {
        dibujarPantalla14();
    } else if (estado == 15) {
        dibujarPantalla15();
    } else if (estado == 16) {
        dibujarPantalla16();
    } else if (estado == 17) {
        dibujarPantalla17();
    } else if (estado == 18) {
        dibujarPantalla18();
    } else if (estado == 19) {
        dibujarPantalla19();
    } else if (estado == 20) {
        dibujarPantalla20();
    } else if (estado == 21) {
        dibujarPantalla21();
    } else if (estado == 22) {
        dibujarPantalla22();
    }
  
    dibujarBotones();
}


function mousePressed() {
    // Iniciar musica al primer clic
    if (!musicFondo.isPlaying()) {
        musicFondo.setLoop(true);
        musicFondo.play();
    }

    for (let i = 0; i < botonesX.length; i++) {
        if (mouseX > botonesX[i] && 
            mouseX < botonesX[i] + botonesAncho[i] &&
            mouseY > botonesY[i] && 
            mouseY < botonesY[i] + botonesAlto[i]) {
            // Cambiar estado al destino del boton
            estado = botonesDestino[i];
            crearBotones();
        }
    }
}

function dibujarFondo() {
    for (let i = 0; i < height; i++) {
        let c = lerpColor(color(138, 43, 226), color(60, 25, 60), i / height);
        stroke(c);
        line(0, i, width, i);
    }
}

function dibujarImagen(numImg) {
    image(imagenes[numImg], width/2 - 190, 20, 380, 270);
    noFill();
    stroke(0, 255, 255);
    strokeWeight(3);
    rect(width/2 - 190, 20, 380, 270);
}

//  Dibujar titulo
function dibujarTitulo(titulo) {
    fill(0, 255, 255);
    noStroke();
    textAlign(CENTER);
    textSize(24);
    text(titulo, width/2, 270);
}

// Dibujar linea 
function dibujarLinea() {
    stroke(147, 112, 219);
    strokeWeight(2);
    line(120, 290, width - 120, 290);
}

//  Dibujar texto 
function dibujarTexto(texto) {
    fill(255);
    textSize(14);
    textAlign(CENTER, TOP);
    text(texto, 40, 305, 560, 100);
}

// Dibujar  botones
function dibujarBotones() {
    for (let i = 0; i < botonesX.length; i++) {
        fill(147, 51, 234);
        stroke(255);
        strokeWeight(2);
        rect(botonesX[i], botonesY[i], botonesAncho[i], botonesAlto[i], 15);
        
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(14);
        text(botonesTexto[i], botonesX[i] + botonesAncho[i]/2, botonesY[i] + botonesAlto[i]/2);
    }
}


function crearBotones() {
    // Vaciar arrays
    botonesX = [];
    botonesY = [];
    botonesAncho = [];
    botonesAlto = [];
    botonesTexto = [];
    botonesDestino = [];
    
    if (estado == 0) {
        // 1 boton
        botonesX.push(220);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Comenzar');
        botonesDestino.push(1);
    } else if (estado == 1) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Resistir la energía');
        botonesDestino.push(2);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Ignorar la sensación');
        botonesDestino.push(3);
    } else if (estado == 2) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Contarle a las Winx');
        botonesDestino.push(4);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Mantenerlo en secreto');
        botonesDestino.push(5);
    } else if (estado == 3) {
        // 1 boton
        botonesX.push(220);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Continuar');
        botonesDestino.push(5);
    } else if (estado == 4 || estado == 7 || estado == 10 || estado == 11 || estado == 13 || estado == 14 || estado == 16 || estado == 17) {
        // 1 boton
        botonesX.push(220);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Continuar');
        if (estado == 4) botonesDestino.push(6);
        else if (estado == 7) botonesDestino.push(9);
        else if (estado == 10) botonesDestino.push(11);
        else if (estado == 11) botonesDestino.push(13);
        else if (estado == 13) botonesDestino.push(15);
        else if (estado == 14) botonesDestino.push(15);
        else if (estado == 16) botonesDestino.push(18);
        else if (estado == 17) botonesDestino.push(18);
    } else if (estado == 5) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Ir con Flora');
        botonesDestino.push(7);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Salir sola');
        botonesDestino.push(8);
    } else if (estado == 6) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Las Winx la detienen');
        botonesDestino.push(9);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Dejar fluir la energía');
        botonesDestino.push(10);
    } else if (estado == 8) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Robar el Códex');
        botonesDestino.push(11);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Dudar');
        botonesDestino.push(10);
    } else if (estado == 9) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Aceptar tratamiento');
        botonesDestino.push(12);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Rechazar ayuda');
        botonesDestino.push(11);
    } else if (estado == 12) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Aceptar perdón');
        botonesDestino.push(14);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Alejarse');
        botonesDestino.push(13);
    } else if (estado == 15) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Enviar señal');
        botonesDestino.push(16);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Rendirse');
        botonesDestino.push(17);
    } else if (estado == 18) {
        // 3 botones
        botonesX.push(40);
        botonesY.push(400);
        botonesAncho.push(180);
        botonesAlto.push(45);
        botonesTexto.push('Destruir Códex');
        botonesDestino.push(19);
        
        botonesX.push(230);
        botonesY.push(400);
        botonesAncho.push(180);
        botonesAlto.push(45);
        botonesTexto.push('Esperar a las Trix');
        botonesDestino.push(20);
        
        botonesX.push(420);
        botonesY.push(400);
        botonesAncho.push(180);
        botonesAlto.push(45);
        botonesTexto.push('Aceptar oscuridad');
        botonesDestino.push(21);
    } else if (estado == 19 || estado == 20 || estado == 21) {
        // 2 botones
        botonesX.push(100);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Reiniciar');
        botonesDestino.push(0);
        
        botonesX.push(340);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Créditos');
        botonesDestino.push(22);
    } else if (estado == 22) {
        // 1 boton
        botonesX.push(220);
        botonesY.push(400);
        botonesAncho.push(200);
        botonesAlto.push(45);
        botonesTexto.push('Volver al inicio');
        botonesDestino.push(0);
    }
}


function dibujarPantalla0() {
    dibujarFondo();
    dibujarImagen(1);
    dibujarTitulo('WINX CLUB');
    dibujarLinea();
    dibujarTexto('Sombras de Realix\n\nUna historia interactiva\nTus decisiones cambiarán el destino de Bloom');
}

function dibujarPantalla1() {
    dibujarFondo();
    dibujarImagen(2);
    dibujarTitulo('Entrenamiento Dimensional');
    dibujarLinea();
    dibujarTexto('Bloom y Avalon viajan entre dimensiones.\nUna sombra se adhiere a la Llama del Dragón.\n\nAvalon: "Mantén el control, Bloom"\nBloom: "Siento algo oscuro dentro de mí"');
}

function dibujarPantalla2() {
    dibujarFondo();
    dibujarImagen(3);
    dibujarTitulo('El Regreso a Alfea');
    dibujarLinea();
    dibujarTexto('Bloom resiste y contiene la oscuridad.\nDe vuelta en Alfea, se siente extraña.\n\nLockette: "Tu luz brilla distinto"\nBloom: "Necesito ayuda"');
}

function dibujarPantalla3() {
    dibujarFondo();
    dibujarImagen(22);
    dibujarTitulo('El Regreso a Alfea');
    dibujarLinea();
    dibujarTexto('Bloom ignora la sensación oscura.\nEl virus gana fuerza silenciosamente.\n\nLockette: "Tu luz brilla más fría"\nBloom: "Solo estoy cansada"');
}

function dibujarPantalla4() {
    dibujarFondo();
    dibujarImagen(4);
    dibujarTitulo('Confianza');
    dibujarLinea();
    dibujarTexto('Bloom confía en sus amigas.\nLas Winx prometen ayudarla.\n\nStella: "No estás sola"\nFlora: "Juntas somos más fuertes"');
}

function dibujarPantalla5() {
    dibujarFondo();
    dibujarImagen(5);
    dibujarTitulo('Cambio de Look');
    dibujarLinea();
    dibujarTexto('Las Winx intentan animar a Bloom.\nPero el brillo de sus ojos se apaga.\n\nFlora: "¿Hacemos jardinería?"\nBloom: "Mejor caminaré sola"');
}

function dibujarPantalla6() {
    dibujarFondo();
    dibujarImagen(6);
    dibujarTitulo('Transformación Oscura');
    dibujarLinea();
    dibujarTexto('Bloom practica su transformación.\nUn aura oscura aparece.\n\nBloom: "¿Qué me pasa?"\nStella: "¡Bloom, resiste!"');
}

function dibujarPantalla7() {
    dibujarFondo();
    dibujarImagen(7);
    dibujarTitulo('Momento de Calma');
    dibujarLinea();
    dibujarTexto('Bloom va al jardín con Flora.\nLas plantas se marchitan a su paso.\n\nFlora: "Las plantas sienten tu oscuridad"\nBloom: "Tengo miedo"');
}

function dibujarPantalla8() {
    dibujarFondo();
    dibujarImagen(8);
    dibujarTitulo('Archivos de Alfea');
    dibujarLinea();
    dibujarTexto('Bloom camina hipnotizada a los Archivos.\nConcorda intenta detenerla.\n\nConcorda: "¡Detente!"\nBloom: "¡Nadie me detendrá!"');
}

function dibujarPantalla9() {
    dibujarFondo();
    dibujarImagen(9);
    dibujarTitulo('Diagnóstico');
    dibujarLinea();
    dibujarTexto('Avalon examina la energía de Bloom.\n\nAvalon: "Es un virus de sombras"\nStella: "¿Y si no puede volver?"\nBloom: "Siento su voz en mi cabeza"');
}

function dibujarPantalla10() {
    dibujarFondo();
    dibujarImagen(10);
    dibujarTitulo('Duda');
    dibujarLinea();
    dibujarTexto('Bloom lucha contra la oscuridad.\nPero es demasiado tarde.\n\nBloom: "No, esto no está bien"\nVoz: "Es tu destino"');
}

function dibujarPantalla11() {
    dibujarFondo();
    dibujarImagen(11);
    dibujarTitulo('La Caída - Dark Bloom');
    dibujarLinea();
    dibujarTexto('Kerborg aparece. Bloom entrega el Códex.\nSu cabello se enciende en rojo y violeta.\n\nKerborg: "Bienvenida"\nDark Bloom: "Yo elijo mi destino"');
}

function dibujarPantalla12() {
    dibujarFondo();
    dibujarImagen(12);
    dibujarTitulo('El Antídoto');
    dibujarLinea();
    dibujarTexto('Avalon dispara un rayo purificador.\nBloom cae exhausta pero consciente.\n\nBloom: "Les fallé"\nStella: "Te perdonamos"');
}

function dibujarPantalla13() {
    dibujarFondo();
    dibujarImagen(13);
    dibujarTitulo('Fortaleza de Darkar');
    dibujarLinea();
    dibujarTexto('Bloom es secuestrada por Avalon falso.\nDarkar la ata con cadenas de sombra.\n\nDarkar: "Tú eres la llave"\nDark Bloom: "¿Y si te traiciono?"');
}

function dibujarPantalla14() {
    dibujarFondo();
    dibujarImagen(14);
    dibujarTitulo('Preparación');
    dibujarLinea();
    dibujarTexto('Las Winx se preparan para el rescate.\n\nStella: "Vamos por ti, Bloom"\nSky: "Te encontraremos"\nBloom: "Por favor, apúrense"');
}

function dibujarPantalla15() {
    dibujarFondo();
    dibujarImagen(15);
    dibujarTitulo('Camino a Realix');
    dibujarLinea();
    dibujarTexto('Bloom y Darkar van hacia Realix.\nLas Winx los siguen.\n\nDarkar: "Seremos invencibles"\nDark Bloom: "O condenados"');
}

function dibujarPantalla16() {
    dibujarFondo();
    dibujarImagen(16);
    dibujarTitulo('El Ritual');
    dibujarLinea();
    dibujarTexto('Bloom envía una señal. Las Winx llegan.\n\nSky: "¡Bloom, no sos esto!"\nBloom: "No puedo controlarlo"\nStella: "¡Sí podés!"');
}

function dibujarPantalla17() {
    dibujarFondo();
    dibujarImagen(17);
    dibujarTitulo('El Ritual');
    dibujarLinea();
    dibujarTexto('Bloom se rinde. Las Winx llegan tarde.\n\nDarkar: "¡Es mía!"\nBloom: (silencio)\nFlora: "¡Recordá quién sos!"');
}

function dibujarPantalla18() {
    dibujarFondo();
    dibujarImagen(6);
    dibujarTitulo('Convergencia Final');
    dibujarLinea();
    dibujarTexto('El momento decisivo ha llegado.\nTres caminos se abren ante Bloom.\n\n¿Qué elegirá?');
}

function dibujarPantalla19() {
    dibujarFondo();
    dibujarImagen(20);
    dibujarTitulo('★ FINAL: Sacrificio ★');
    dibujarLinea();
    dibujarTexto('Bloom destruye el Códex.\nPierde parte de su magia pero salva a todos.\n\nBloom: "Prefiero perder mi poder\nantes que perderme a mí misma"');
}

function dibujarPantalla20() {
    dibujarFondo();
    dibujarImagen(18);
    dibujarTitulo('★ FINAL: Redención ★');
    dibujarLinea();
    dibujarTexto('Las Trix atacan a Darkar.\nBloom es liberada y purificada.\n\nStella: "¡Sabía que volverías!"');
}

function dibujarPantalla21() {
    dibujarFondo();
    dibujarImagen(19);
    dibujarTitulo('★ FINAL: Reina de Realix ★');
    dibujarLinea();
    dibujarTexto('Bloom elige el poder absoluto.\nDestruye a Darkar y reina sola.\n\nDark Bloom: "Ahora Realix me pertenece"');
}

function dibujarPantalla22() {
    dibujarFondo();
    dibujarImagen(21);
    dibujarTitulo('★ CRÉDITOS ★');
    dibujarLinea();
    dibujarTexto('Desarrollado por: Lucas Meza & Delfina Silva\n\nBasado en: Winx Club Temporada 2\nCreador: Iginio Straffi');
}
