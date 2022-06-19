function selecTurno(){
let ingDia = prompt ("Seleccione el dia que desea asistir \n 1 - Martes \n 2 - Miercoles \n 3 - Jueves \n 4 - Viernes \n 5 - Sabado:");
let ingHora = prompt ("Ingrese el horario en el que desea asistir : ");
    switch(ingDia){
        case "1 - Martes":
            alert ("Su turno es el dia:" + ingDia + " a las: " + ingHora + " horas");
            break;
        case "2":
            alert ("Su turno es el dia:" + ingDia + " a las: " + ingHora + " horas");
            break;
        case "3":
            alert ("Su turno es el dia:" + ingDia + " a las: " + ingHora + " horas");
            break;
        case "4":
            alert ("Su turno es el dia:" + ingDia + " a las: " + ingHora + " horas");
            break;
        case "5":
            alert ("Su turno es el dia:" + ingDia + " a las: " + ingHora + " horas");
            break;
        default:
            alert("Seleccione un dia");
            break;
    } 
}
alert("Bienvenido a la barberia \nEstamos de Martes a Sabados de 14 a 21 HS")
selecTurno()
