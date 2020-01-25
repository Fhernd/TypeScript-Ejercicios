/* Ejercicio 12: Definir y usar variables de tipo enumeración (enum). */
var PuntoCardinal;
(function (PuntoCardinal) {
    PuntoCardinal[PuntoCardinal["Norte"] = 1] = "Norte";
    PuntoCardinal[PuntoCardinal["Oriente"] = 2] = "Oriente";
    PuntoCardinal[PuntoCardinal["Sur"] = 3] = "Sur";
    PuntoCardinal[PuntoCardinal["Occidente"] = 4] = "Occidente";
})(PuntoCardinal || (PuntoCardinal = {}));
;
let ubicacion = PuntoCardinal.Oriente;
switch (ubicacion) {
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
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
;
let colorFavorito = Color.Rojo;
console.log(colorFavorito);
