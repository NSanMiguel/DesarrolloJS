// BARBER SUR //
// Declaracion de variables //
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
let servicioConfirmado
let nuevaColumna
let confirmarTurno
let asignarTurnoConfirmado
let mostrarTotal
let arrayDeBotones
let botonSubmit

// Declaracion de arrays //
const dias = ["Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sabado"]

let clientes = []

// Declaracion de objetos //
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
    calcularTotal () {
        let total = 0
        for (let i = 0; i < this.servicio.length ; i++ ){
            total += this.servicio[i].precio
        }
        return total
    }    
}

// Declaracion de Funciones //
function mensajeDeBienvenida(){
    Swal.fire(
        'Bienvenido a BARBER SUR',
        'Presione OK para realizar su solicitud',
        'info'
      )
}

function inicializarElementosHTML (){
    formulario = document.getElementById("formulario")
    inputNombre = document.getElementById("inputNombre")
    inputApellido = document.getElementById("inputApellido")
    inputDia = document.getElementById("select")
    inputHorario = document.getElementById("inputHorario")
    tabla = document.getElementById("tablaProductos")
    divCard = document.getElementById("cards")
    botonMostrarServicio = document.getElementById("mostrarServicio")
    servicioConfirmado = document.getElementById("servicioConfirmado")
    confirmarTurno = document.getElementById("confirmarTurno")
    asignarTurnoConfirmado = document.getElementById("turnoConfirmado")
}

async function serviciosDisponibles(){
    response = await fetch("./serviciosDisponibles.json")
    data = await response.json()
    console.log(data)
    data.forEach(servicio =>{
        divCard.innerHTML += crearCard(servicio)
    })
    botonAddServicio()
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
                    </div> `
    return agregarCard
}

function ingresarCliente(event){
    event.preventDefault()  
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let dia = inputDia.value
    let hora = inputHorario.value
    let nuevoCliente = new Cliente (nombre,apellido,dia,hora)
    clientes.push(nuevoCliente)
    localStorage.setItem("listaDeTurnos", JSON.stringify(clientes))
    console.log(clientes)
    renovarStorage()
    limpiarTabla()
    agregarTabla()
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

function botonAddServicio(){
    servicioButton = document.querySelectorAll(".botonDeServicio")
    nuevoServicio = new ServicioSeleccionado(1)
    arrayDeBotones = Array.from(servicioButton)
    arrayDeBotones.forEach(boton =>{
        boton.addEventListener("click", (e) => {
            let eleccionDeServicio = data.find(servicio => servicio.id == e.target.id)
            nuevoServicio.servicio.push(eleccionDeServicio)
            localStorage.setItem("listaDeServicios", JSON.stringify(nuevoServicio))
            toastAgregarServicio()
            limpiarCard()
            agregarServicio()
        })
    })
}

function agregarServicio(){
    nuevoServicio.servicio.forEach(servicio=>{
        servicioConfirmado.innerHTML += crearCardServicioConfirmado(servicio)
})
}

function crearCardTurnoConfirmado(mostrarConfirmacion){
    let agregarCard= `
    <div class="card-header"><b> Su turno es: </b></div>
        <div class="card-body">
            <h5 class="card-title">${mostrarConfirmacion.dia} 
            ${mostrarConfirmacion.hora} HS
            </h5>
            <p class="card-text">
              <b> Nombre: </b> ${mostrarConfirmacion.nombre} </br>
              <b> Apellido: </b>  ${mostrarConfirmacion.apellido}    
            </p>
        </div>
    </div>
    `
    return agregarCard
}

function desactivarFormulario(){
    botonSubmit.disabled = true
    inputApellido.disabled = true
    inputDia.disabled = true
    inputHorario.disabled = true
    inputNombre.disabled = true
}

function mostrarTurnoConfirmado(){
    Swal.fire(
        'Su turno fue confirmado',
        'Gracias por elegir BARBER SUR, presione OK para visualizar el comprobante',
        'success'
      )
    clientes.forEach(cliente => {
        asignarTurnoConfirmado.innerHTML += crearCardTurnoConfirmado(cliente)
    })
    mostrarTotal = document.createElement("div")
    mostrarTotal.innerHTML += `<div><h4> El total a pagar es: $ ${nuevoServicio.calcularTotal()} </h4></div>`
    mostrarTotal.className = "card"
    document.body.appendChild(mostrarTotal)
    botonSubmit = document.getElementById("botonSubmit")
    formulario.reset()
    divCard.remove()
    desactivarFormulario()
}

function crearCardServicioConfirmado(confirmacionDeServicio){
    let agregarCard= `
    <div class="card-header"><b> BARBER SUR </b></div>
        <div class="card-body">
            <h5 class="card-title">
                Servicio seleccionado: ${confirmacionDeServicio.tipoDeServicio} 
            <p class="card-text">
                Precio: $ ${confirmacionDeServicio.precio}
            </p>
        </div>
    </div>
    `
    return agregarCard
}

function toastAgregarServicio(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Servicio seleccionado'
      })
}

function turnoConfirmado(){
    let chequearTurno = (clientes.length === 0) ? true : false
    chequearTurno ? error() : mostrarTurnoConfirmado()
}

function renovarStorage() {
    localStorage.removeItem("listaDeServicios"); 
    localStorage.setItem("listaDeServicios", JSON.stringify(nuevoServicio));
}

function limpiarCard() {
    let cardLimpiar = document.getElementById("servicioConfirmado");
    cardLimpiar.innerHTML = "";
}

function agregarDias(opcion){
    for ( let index=0; index < dias.length; index++){
        opcion = document.createElement('option')
        opcion.innerHTML += `<option value='${index}' required>${dias[index]}</option>`
        inputDia.appendChild(opcion)
    }
}

function mensajeDeHorario(){
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Nuestro horario de atencion es de 14 HS a 21 HS',
        showConfirmButton: false,
        timer: 1500
      })
}

function iniciarEventos(){
    agregarDias()
    formulario.onsubmit = (event) => ingresarCliente(event)
    confirmarTurno.onclick = (event) => turnoConfirmado(event)
    inputHorario.onclick = (event) => mensajeDeHorario(event)
    }

function obtenerStorage(){
    let turnoGuardado = localStorage.getItem("listaDeTurnos")
    if(turnoGuardado !== null){
        clientes = JSON.parse(turnoGuardado)
    }
}

function error (){
    Swal.fire({
        icon: 'error',
        title: 'ERROR...',
        text: 'Debe ingresar su turno',
      })
}

function main(){
    mensajeDeBienvenida()
    inicializarElementosHTML()
    iniciarEventos()
    agregarTabla()
    serviciosDisponibles()
}

//Programa principal//
main()