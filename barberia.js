let formulario
let inputNombre
let inputApellido
let inputDia
let inputHorario
let tabla
let divCard
let servicioButton
let nuevoServicio
let botonMostrarTurno
let cardMostrar

const dias = ["Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sabado"]

let clientes = []

let ingresarServicio = []

class Cliente {
    constructor(nombre,apellido,dia,hora){
    this.nombre = nombre.toUpperCase()
    this.apellido = apellido.toUpperCase()
    this.dia = dia.toUpperCase()
    this.hora = hora
    }
}

class Servicios {
    constructor (id,tipoDeServicio,precio){
        this.id = id
        this.tipoDeServicio = tipoDeServicio
        this.precio = precio
    }
}

class ServicioSeleccionado {
    constructor (id){
        this.id = id
        this.servicio = []
    }
}

function inicializarElementosHTML (){
    formulario = document.getElementById("formulario")
    inputNombre = document.getElementById("inputNombre")
    inputApellido = document.getElementById("inputApellido")
    inputDia = document.getElementById("select")
    inputHorario = document.getElementById("inputHorario")
    tabla = document.getElementById("tablaProductos")
    divCard = document.getElementById("cards")
    botonMostrarTurno = document.getElementById("mostrarTurno")
    cardMostrar = document.getElementById("cardMostrar")
}

function agregarServicio(){
    let servicioCorte = new Servicios (1,"Corte",800)
    let servicioBarba = new Servicios (2,"Barba",300)
    let servicioCejas = new Servicios (3,"Cejas",200)
    let servicioColor = new Servicios (4,"Color",1200)
    ingresarServicio.push(servicioCorte)
    ingresarServicio.push(servicioBarba)
    ingresarServicio.push(servicioCejas)
    ingresarServicio.push(servicioColor)
    console.log(ingresarServicio)
}

function crearCard (servicio){
    let agregarCard = `
    <div class="row">
    <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${servicio.tipoDeServicio}</h5>
      <p class="card-text">$ ${servicio.precio}</p>
      <a href="#" class="btn btn-dark botonDeServicio" id="${servicio.id}">Seleccionar servicio</a>
    </div>`
    return agregarCard
}

function iniciarCard(){
    ingresarServicio.forEach(servicio =>{
        divCard.innerHTML += crearCard(servicio)
    })
}

function iniciarCardMostrar(){
    nuevoServicio.servicio.forEach(servicio => {
        let agregarCard = document.createElement("div")
        agregarCard.innerHTML =`
        <li class="list-group-item">Servicio: ${servicio.tipoDeServicio}</li>
        <li class="list-group-item">Precio: ${servicio.precio}</li>
       `
        cardMostrar.appendChild(agregarCard)
    })
}

function ingresarCliente(event){
    event.preventDefault()  
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let dia = inputDia.value
    let hora = inputHorario.value
    let nuevoCliente = new Cliente (nombre,apellido,dia,hora)
    clientes.push(nuevoCliente)
    formulario.reset()
    localStorage.setItem("listaDeTurnos", JSON.stringify(clientes))
    console.log(clientes)
    limpiarTabla()
    agregarTabla()
}

function agregarDias(opcion){
    for ( let index=0; index < dias.length; index++){
        opcion = document.createElement('option')
        opcion.innerHTML += `<option value='${index}' required>${dias[index]}</option>`
        inputDia.appendChild(opcion)
    }
}

function iniciarEventos(){
    agregarDias()
    formulario.onsubmit = (event) => ingresarCliente(event)
    botonMostrarTurno.onclick = (event) => iniciarCardMostrar(event)
}

function agregarTabla (){
    clientes.forEach((nuevoCliente => {
        let filaDeTabla = document.createElement("tr")
        filaDeTabla.innerHTML =`
            <td>${nuevoCliente.nombre}</td>
            <td>${nuevoCliente.apellido}</td>
            <td>${nuevoCliente.dia}</td>
            <td>${nuevoCliente.hora}</td>
            `
    tabla.tBodies[0].append(filaDeTabla)
    }))
}

function limpiarTabla() {
    while (tabla.rows.length > 1) {
      tabla.deleteRow(1);
    }
  }

function obtenerStorage(){
    let turnoGuardado = localStorage.getItem("listaDeTurnos")
    if(turnoGuardado !== null){
        clientes = JSON.parse(turnoGuardado)
    }
}

function botonAddServicio(){
    servicioButton = document.querySelectorAll(".botonDeServicio")
    nuevoServicio = new ServicioSeleccionado(1)
    let arrayDeBotones = Array.from(servicioButton)
    arrayDeBotones.forEach(boton =>{
        boton.addEventListener("click", (e) => {
            let eleccionDeServicio = ingresarServicio.find(servicio => servicio.id == e.target.id)
            nuevoServicio.servicio.push(eleccionDeServicio)
            console.log(nuevoServicio)
            localStorage.setItem("listaDeServicios", JSON.stringify(nuevoServicio))
        })
    })
}


function obtenerStorageDeServicio(){
    let servicioGuardado = localStorage.getItem("servicioSeleccionado")
    if(servicioGuardado !== null){
        nuevoServicio = JSON.parse(servicioGuardado)
    }
}


function main(){
    inicializarElementosHTML()
    iniciarEventos()
    agregarTabla()
    agregarServicio()
    iniciarCard()
    botonAddServicio()
    
}

main()