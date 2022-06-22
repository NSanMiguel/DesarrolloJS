let ingDia = 0

let ingHora = 0

let total = 0

const corte = 700

const cejas = 200

const barba = 300

const color = 1200


function listaPrecios(){
    alert(" Corte: 700$\n Cejas: 200$ \n Barba: 300$ \n Color: 1200$")
    menuEntrada()
}
function continDia(){
    do {
        ingDia = prompt ("Seleccione el dia que desea asistir \n 1 - Martes \n 2 - Miercoles \n 3 - Jueves \n 4 - Viernes \n 5 - Sabado");
    }while(ingDia <=0)
    
}

function continHora(){
    do {
        ingHora = prompt ("Ingrese el horario en el que desea asistir : ");
    }while(ingHora <=0)
}
function selecTurno(){
switch(ingDia){
    case "1":
        alert ("Su turno es el dia martes a las " + ingHora + " horas");
        break;
    case "2":
        alert ("Su turno es el dia miercoles a las " + ingHora + " horas");
        break;
    case "3":
        alert ("Su turno es el dia jueves a las " + ingHora + " horas");
        break;
    case "4":
        alert ("Su turno es el dia viernes a las " + ingHora + " horas");
        break;
    case "5":
        alert ("Su turno es el dia sabado a las " + ingHora + " horas");
        break;
    default:
        alert("Seleccione un dia");
        break;
}
}
function menuEntrada(){
    let selecEntrada= prompt(" 1 - Lista de precios \n 2 - Solicitar turno");
    switch(selecEntrada){
        case "1":
            listaPrecios()
            break;
        case "2":
            continDia()
        default:
            break;
    }
}

function tipoDeServ(){
    let tipo1 = prompt("Seleccione que servicio se realizara\n 1 - Corte\n 2 - Cejas\n 3 - Barba\n 4 - Color");
    switch(tipo1){
        case "1":
            total += corte
            alert("Usted selecciono CORTE, el total a pagar es de " + total + "$")
            break;
        case "2":
            total += cejas
            alert("Usted selecciono CEJAS, el total a pagar es de " + total + "$")
            break;
        case "3":
            total += barba
            alert("Usted selecciono BARBA, el total a pagar es de " + total + "$")
            break;
        case "4":
            total += color
            alert("Usted selecciono COLOR, el total a pagar es de " + total + "$")
            break;
        default:
            break;
    
    }
        
}    
function otroServ(){
    let volver = 0
    do{
        volver = prompt("Desea seleccionar otro servicio?\n Ingrese s/n" );
            if(volver == "n"){
            alert("Gracias por solicitar su turno")
            }else    
                tipoDeServ()
    }while(volver == "s")
}


function Turno(){
    menuEntrada()
    continHora()
    selecTurno()
    tipoDeServ()
    otroServ()
}

alert("Bienvenido a la barberia \nAtendemos de Martes a Sabados de 14 a 21 HS")
Turno()