const listadoPasajeros =[
    "Jack Dawson",
    "Leondar Peaky Blinder",
    "Thomas Andrews",
    "Margaret Brown",
    "John Jacob Astor IV",
    "Molly Brown",
    "Captain Edward Smith",
    "J. Bruce Ismay",
    "Benjamin Guggenheim",
    "Wallace Hartley",
    "Albert Vandellos",
    "Margareth Leeds"
];
console.log("Listado de pasajeros: " + listadoPasajeros);

//mala espina, se bajand 2
listadoPasajeros.pop();
listadoPasajeros.pop();

console.log("Listado de pasajeros: " + listadoPasajeros);

//se suman dos pasajeros nuevos

listadoPasajeros.push("Lucile Carter",
"Charles Lightoller");
console.log("Listado de pasajeros: " + listadoPasajeros);

//cambia el segundo pasajero

listadoPasajeros[1] = "Rose DeWitt Bukater";

console.log("Listado de pasajeros: " + listadoPasajeros);


console.log("Estos son pasajeros del dia de hoy: ");

for (let i=0; i<listadoPasajeros.length; i++){
    
    console.log(listadoPasajeros[i])
}

console.log (listadoPasajeros.length) ;
//Imprimir en pantalla

function finalList() {
    let pasajero = "<ul>"; 

    for (let i = 0; i < listadoPasajeros.length; i++) {
        pasajero += "<li>" + listadoPasajeros[i] + "</li>"; 
    }

    pasajero += "</ul>"; 
    document.getElementById("finalList").innerHTML = pasajero; 
}

finalList();
