// Ejercicio 16: Uso del tipo de dato never.

function generarError(mensaje: string): never{
    throw new Error(mensaje);
}

function ejecucionInfinita(): never {
    while (true){}
}
