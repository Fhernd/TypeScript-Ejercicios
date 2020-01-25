/* Ejercicio 9: Definir y usar variables de cadena de caracteres (string). */

(() => {
    let lenguaje: string;
    lenguaje = 'JS';
    lenguaje = "TypeScript";
    lenguaje = `JavaScript`;

    let frase: string = `Su lenguaje favorito es ${lenguaje}.`;

    console.log(frase);
})();
