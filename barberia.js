let ingDia = 0

let ingHora = 0

let total = 0

const guardarDatos = []

const servicios = []

let ingNombre = prompt("Ingrese su nombre: ")

let ingApellido = prompt("Ingrese su apellido: ")

function menuEntrada(){
    let selecEntrada= prompt(" 1 - Lista de precios \n 2 - Solicitar turno")
    switch(selecEntrada){
        case "1":
            listaPrecios()
            break;
        case "2":
            agregarCliente()
            continDia()
        default:
            break;
    }
}

class tipoDeServicio {
    constructor (servicio, precio){
        this.servicio = servicio
        this.precio = precio
}
}

servicios.push(new tipoDeServicio("Corte ",700))
servicios.push(new tipoDeServicio("Cejas ",200))
servicios.push(new tipoDeServicio("Barba ",300))
servicios.push(new tipoDeServicio("Color ",1200))
console.log(servicios)

function mostrarServicio(){
    for(const servicio of servicios){
        alert(servicio.servicio + servicio.precio + "$")
    }
}

function listaPrecios(){
    mostrarServicio()
    menuEntrada()
}

class nuevoCliente {
    constructor (nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

function agregarCliente(){
    guardarDatos.push(new nuevoCliente(ingNombre,ingApellido))
    console.log(guardarDatos)
}

function continDia(){
    do {
        ingDia = prompt (ingNombre + ", Seleccione el dia que desea asistir \n 1 - Martes \n 2 - Miercoles \n 3 - Jueves \n 4 - Viernes \n 5 - Sabado")
    }while(ingDia <=0)
    
}

function continHora(){
    do {
        ingHora = prompt ( ingNombre + ", Ingrese el horario en el que desea asistir : ")
    }while(ingHora <=0)
}

function selecTurno(){
    switch(ingDia){
    case "1":
        alert ( ingNombre + ", Su turno es el dia martes a las " + ingHora + " horas")
        break;
    case "2":
        alert (ingNombre + ", Su turno es el dia miercoles a las " + ingHora + " horas")
        break;
    case "3":
        alert (ingNombre + ", Su turno es el dia jueves a las " + ingHora + " horas")
        break;
    case "4":
        alert (ingNombre + ", Su turno es el dia viernes a las " + ingHora + " horas")
        break;
    case "5":
        alert (ingNombre + ", Su turno es el dia sabado a las " + ingHora + " horas")
        break;
    default:
        alert(ingNombre + ", Seleccione un dia")
        break;
}
}

function Turno(){
    menuEntrada()
    continHora()
    selecTurno()
    alert("Servicios disponibles")
    mostrarServicio()
}

alert(ingNombre + ", Bienvenido a la barberia \nAtendemos de Martes a Sabados de 14 a 21 HS")
Turno()
alert(ingNombre + ", Gracias por solicitar su turno")


