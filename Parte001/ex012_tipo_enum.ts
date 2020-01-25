/* Ejercicio 12: Definir y usar variables de tipo enumeración (enum). */

enum PuntoCardinal {Norte = 1, Oriente, Sur, Occidente};

let ubicacion = PuntoCardinal.Oriente;

switch(ubicacion){
    case 1:
    console.log('Norte');
    break;
    case 2:
    console.log('Oriente');
    break;
    case 3:
    console.log('Sur');
    break;
    case 4:
    console.log('Occidente');
    break;
}

enum Color {Rojo, Verde, Azul};

let colorFavorito = Color.Rojo;

console.log(colorFavorito);
