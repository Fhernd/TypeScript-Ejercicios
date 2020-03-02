// Ejercicio 17: Uso del tipo de dato incorporado Object.

let computador = {
    id: 1001,
    marca: 'MSi',
    cpu: 'Intel Core i7',
    ram: '16GB',
    ssd: '512GB',
    mostrarDatos: function() {}
};

computador.mostrarDatos = function() {
    return `ID: ${this.id} - Marca: ${this.marca}`;
}

console.log(typeof computador);
