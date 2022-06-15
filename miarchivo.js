let cantNotas = 0
let sumaNotas = 0
do{
    cantNotas= prompt("Ingrese la cantidad de notas");

}while(cantNotas== 0);{
    for (let i=1; i<=cantNotas; i++){
        let ingDatos = parseFloat(prompt("Ingrese la nota " + i + ":"));
        sumaNotas += ingDatos 
}
}
let prom1 = sumaNotas / cantNotas
    alert("El promedio es: " + prom1);
if (prom1>=7){
    alert("Esta aprobado")
}
else{
    alert("Esta desaprobado")
}

