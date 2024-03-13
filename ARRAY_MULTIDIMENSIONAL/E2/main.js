const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

medidas2 = medidas.flat(Infinity);
console.log(medidas2);
console.log("Si hacemos un FLAT, el Index del 26 es: " + medidas2.indexOf(26));


console.log("Leer los nombres:");
console.log(nombres [1][2]);
console.log(nombres[2][1]);

console.log("Leer mascotas:");
console.log(nombres[0]);
nombres2 = nombres[0];
for (let i=nombres2; i<=nombres2; i++){
    console.log("los nombres de mascotas son: " + i )};


