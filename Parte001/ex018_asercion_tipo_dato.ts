// Ejercicio 18: Aplicar una aserción de tipo dato sobre una variable o literal.

let valor: any = 'TypeScript es tremendo';

let longitud = (<string> valor).length;

console.log('La longitud es:', longitud);

console.log();

console.log('Uso operador as:')
let longitudCadena = (valor as string).length;
console.log('La longitud es:', longitud);
