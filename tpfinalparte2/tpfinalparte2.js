let juego;
let imgStella, imgFlora;
let imgIcy, imgDarcy, imgStormy, imgMonstruo1;
let imgEnemigo2a, imgEnemigo2b, imgEnemigo2c, imgDarkar;
let imgRayo, imgHoja;
let fondoAlfea, fondoOscuro;
let fuenteTitulos;
let fuenteTexto;
let musicaMenu;     
let musicaNivel; 
let sonidos = [];

function preload() {
    imgStella = loadImage('data/stella.png');
    imgFlora = loadImage('data/flora.png');
    imgIcy = loadImage('data/icy.png');
    imgDarcy = loadImage('data/darcy.png');
    imgStormy = loadImage('data/stormy.png');
    imgMonstruo1 = loadImage('data/monstruo1.png');
    imgEnemigo2a = loadImage('data/enemigo2a.png');
    imgEnemigo2b = loadImage('data/enemigo2b.png');
    imgEnemigo2c = loadImage('data/enemigo2c.png');
    imgDarkar = loadImage('data/darkar.png'); 
    imgRayo = loadImage("data/rayo.png");
    imgHoja = loadImage("data/hoja.png");
    fondoAlfea = loadImage('data/fondo_alfea.png');
    fondoOscuro = loadImage('data/fondo_oscuro.png');
    fondoVictoria = loadImage('data/fondo_victoria.png');
    fondoDerrota = loadImage('data/fondo_derrota.png');
    fondoInicio = loadImage('data/fondo_inicio.png');
    fondoCreditos = loadImage('data/fondo_creditos.png');
    fondoInstrucciones = loadImage('data/fondo_instrucciones.png');
    fuenteTitulos = loadFont("data/fuente_titulo.ttf");
    fuenteEmojis  = loadFont("data/fuente_emojis.ttf");
    musicaMenu = loadSound('data/musica_menu.mp3');
    musicaNivel = loadSound('data/musica_nivel.mp3');
}
function cambiarMusica(tipo) {
    if (tipo == "menu") {
        if (!musicaMenu.isPlaying()) {
            musicaNivel.stop();
            musicaMenu.play();
        }
    } else if (tipo == "nivel") {
        if (!musicaNivel.isPlaying()) {
            musicaMenu.stop();
            musicaNivel.play();
        }
    }
}
function setup() {
    createCanvas(640, 480);
    juego = new Juego(); 
    musicaMenu.setLoop(true);    
    musicaMenu.setVolume(1);   
    musicaNivel.setLoop(true);
    musicaNivel.setVolume(1);
    musicaMenu.play();
}

function draw() {
    juego.actualizar();
    juego.dibujar();
}

function mousePressed() {
    juego.manejarClick();
}

function keyPressed() {
    if (keyCode === 32 && (juego.estado == "nivel1" || juego.estado == "nivel2")) {
        juego.disparar();
    }
    
    if (key === 'r' || key === 'R') {
        juego.reiniciar();
    }
}
