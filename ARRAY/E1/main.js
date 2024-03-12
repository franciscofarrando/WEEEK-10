// 1- INVENTARIO DEL ZOO

// Crea un array zoo con al menos 5 animales.

// Imprime el array en consola, y ver imprimiendo a cada paso:

// Añade dos al final.

// Pero resta uno al final.

// Cambia el tercero por otro.

// Imprime el total de animales con la propiedad length.

// Recorre con un bucle FOR todo el array e imprímelo en consola.





const animales = ["Tigre", "Cebra", "Hipopotamo", "Hiena", "Avestruz"];
console.log("Listado de animales: " +animales);


//anadir dos
animales.push("Cabra", "Oveja");

console.log("Listado de animales: " + animales);


// restar el del final
animales.pop();

console.log("Listado de animales: " + animales);

//cambiar el 3ro

animales[2] = "Ciervo";

console.log("Listado de animales: " + animales);

//length

console.log("Hay " + animales.length + " en el zoo hoy.")

//bucle for
console.log("Eston son los animales del zoo hoy: ");
for (let i=0; i<animales.length; i++){
    
    console.log(animales[i])
}

//reverse
console.log("Eston son los animales del zoo hoy pero al: ");
for (let i=animales.length-1; i>=0; i--){
    
    console.log(animales[i])
}