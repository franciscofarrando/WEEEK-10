let num1 = parseInt(prompt("Escriba un numero del 1 al 10"));
let num2 = parseInt(prompt("Escriba un numero del 1 al 10. ATENCION! no puede ser mayor al numero antes escrito"));

 if(num1 == "10" || num2 < num1){
     alert("Error. ")

}else{
    
  for (let i=num1; i<=num2; i++){
    console.log("tabla del :" + i);
    for (let a=1; a<=10; a++){
        
    console.log(i +"x" +a+ "="+ i*a);
  }
  }
}