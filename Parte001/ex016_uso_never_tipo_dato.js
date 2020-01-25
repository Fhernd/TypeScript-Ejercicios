// Ejercicio 16: Uso del tipo de dato never.
function generarError(mensaje) {
    throw new Error(mensaje);
}
function ejecucionInfinita() {
    while (true) { }
}
