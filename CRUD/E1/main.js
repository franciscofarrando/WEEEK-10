const animales = ["Tigre", "Cebra", "Hipopotamo", "Hiena", "Avestruz"];
console.log("Listado de animales: " +animales);

//bucle for
console.log("Eston son los animales del zoo hoy: ");
for (let i=0; i<animales.length; i++){
    
    console.log(animales[i])
}

//reverse
console.log("Eston son los animales del zoo hoy pero al revez: ");
for (let i=animales.length-1; i>=0; i--){
    
    console.log(animales[i])
}