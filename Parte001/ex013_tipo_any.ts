/* Ejercicio 13: Definir y usar variables de tipo any. */

let tipoDesconocido : any = 10;
console.log(tipoDesconocido.toFixed());
console.log(typeof tipoDesconocido);
tipoDesconocido = 'TypeScript';
console.log(tipoDesconocido.toFixed(16));
console.log(typeof tipoDesconocido);
tipoDesconocido = true;
console.log(typeof tipoDesconocido);

console.log();

let tipoDesconocido2 : Object = 10;
console.log(typeof tipoDesconocido2);
tipoDesconocido2 = 'TypeScript';
console.log(typeof tipoDesconocido2);
tipoDesconocido2 = true;
console.log(typeof tipoDesconocido2);
