//Personaje de TV
let nombre = "Goku";
let anime = "Dragon Ball";
let edad = 8; 

let personaje = {
    nombre: "Goku",
    anime: "Dragon Ball",
    edad: 8,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 9;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje.edad);