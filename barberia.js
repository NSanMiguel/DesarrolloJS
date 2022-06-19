let ingDia = 0
let ingHora = 0

function listaPrecios(){
    alert(" Corte: 700$\n Corte + Cejas: 800$ \n Corte + Barba: 900$ \n Color: 1200$")
}
function continDia(){
    do {
        ingDia = prompt ("Seleccione el dia que desea asistir \n 1 - Martes \n 2 - Miercoles \n 3 - Jueves \n 4 - Viernes \n 5 - Sabado:");
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
function Turno(){
    menuEntrada()
    menuEntrada()
    continHora()
    selecTurno()    
}

alert("Bienvenido a la barberia \nEstamos de Martes a Sabados de 14 a 21 HS")
Turno()
