
let ingDia = 0

let ingresarServicio

let ingHora = 0

let selecEntrada

const guardarDatos = []

const servicios = [
    {index: 1, servicio:'Corte', precio: 700},
    {index: 2, servicio:'Cejas', precio: 200},
    {index: 3, servicio:'Barba', precio: 300},
    {index: 4, servicio:'Color', precio: 1500}, 
]

const agregarServicios=[]

const servicios2 = ["Corte","Cejas","Barba","Color"]

let ingNombre = prompt("Ingrese su nombre: ")

let ingApellido = prompt("Ingrese su apellido: ")


function menuEntrada(){
    do{
        selecEntrada= prompt(" 1 - Lista de precios \n 2 - Solicitar turno")
        switch(selecEntrada){
            case "1":
                listaPrecios()
                break
            case "2":
                agregarCliente()
                continDia()
                break
            default:
                break
        }
        if(selecEntrada > 2){
            alert("Seleccione la opcion correcta")
            menuEntrada()
        }
    }while(selecEntrada <= 0)
}

function mostrarServicio(){
    for(const servicio of servicios){
        alert(servicio.servicio + " " + "$" + servicio.precio )
    }
}

function listaPrecios(){
    mostrarServicio()
    menuEntrada()
}

class NuevoCliente {
    constructor (nombre,apellido){
        this.nombre = nombre.toUpperCase()
        this.apellido = apellido.toUpperCase()
    }
}

function agregarCliente(){
    guardarDatos.push(new NuevoCliente(ingNombre,ingApellido))
    console.log(guardarDatos)
}

function continDia(){
    do {
        ingDia = prompt (ingNombre + ", Seleccione el dia que desea asistir \n 1 - Martes \n 2 - Miercoles \n 3 - Jueves \n 4 - Viernes \n 5 - Sabado")
        if(ingDia > 5){
            alert("Seleccione el dia correcto")
            continDia()
        }
    }while(ingDia <=0)
    
}

function continHora(){
    do {
        ingHora = parseFloat(prompt ( ingNombre + ", Ingrese el horario en el que desea asistir : "))
        if((ingHora > 21)|| (ingHora < 14)){
            alert("Seleccione el horario correcto")
            continHora()
        }
    }while(ingHora <=0)
}

function selecTurno(){
    switch(ingDia){
    case "1":
        alert ( ingNombre + ", Su turno es el dia martes a las " + ingHora + " horas")
        break
    case "2":
        alert (ingNombre + ", Su turno es el dia miercoles a las " + ingHora + " horas")
        break
    case "3":
        alert (ingNombre + ", Su turno es el dia jueves a las " + ingHora + " horas")
        break
    case "4":
        alert (ingNombre + ", Su turno es el dia viernes a las " + ingHora + " horas")
        break
    case "5":
        alert (ingNombre + ", Su turno es el dia sabado a las " + ingHora + " horas")
        break
    default:
        alert(ingNombre + ", Seleccione un dia")
        break
    }
}

class IngresarServicio {
    constructor(tipoServicio,tipoPrecio){
        this.tipoServicio = tipoServicio
        this.tipoPrecio = tipoPrecio
    }
}

function selectServicio(){
    do {
        seleccionarServicio = prompt("Seleccione el serivicio que desea: " + servicios2)
        if(seleccionarServicio == "Corte"){
            agregarServicios.push (new IngresarServicio (seleccionarServicio, 700))
        }else if(seleccionarServicio == "Cejas"){
            agregarServicios.push (new IngresarServicio (seleccionarServicio, 200))
        }else if(seleccionarServicio == "Barba"){
            agregarServicios.push (new IngresarServicio (seleccionarServicio, 300))
        }else if(seleccionarServicio == "Color"){
            agregarServicios.push (new IngresarServicio (seleccionarServicio, 1500))
        }else
            selectServicio()
    }while(seleccionarServicio <=0)
    otroServicio()
}

function calcularTotal (){
    let totalservicio
    totalservicio = agregarServicios.reduce ( (acumulador, service )  => acumulador + service.tipoPrecio , 0) 
    alert("El total a pagar es " + "$" + totalservicio)
}

function otroServicio(){
    do{
        selectOtroServicio = prompt("Desea seleccionar otro servicio?\n Ingrese s/n ")
        if(selectOtroServicio == "n"){
            calcularTotal()
            console.log(agregarServicios)
            alert(ingNombre + ", gracias por solicitar su turno.")
        }else if (selectOtroServicio == "s"){
           selectServicio()
        }else
            otroServicio()
        }while(selectOtroServicio == null)
}

function turno(){
    menuEntrada()
    continHora()
    selecTurno()
    alert("Servicios disponibles")
    mostrarServicio()
    selectServicio () 
}

alert(ingNombre + ", Bienvenido a la barberia \nAtendemos de Martes a Sabados de 14 a 21 HS")
turno()





