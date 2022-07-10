let formulario = document.getElementById("formulario")

let inputNombre = document.getElementById("inputNombre")

let inputApellido = document.getElementById("inputApellido")

let inputDia = document.getElementById("inputDia")

let inputHorario = document.getElementById("inputHorario")

let clientes = []



class Cliente {
        constructor(nombre,apellido,dia,hora){
        this.nombre = nombre.toUpperCase()
        this.apellido = apellido.toUpperCase()
        this.dia = dia.toUpperCase()
        this.hora = hora
    }
}

function ingresarCliente(event){
    event.preventDefault()  
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let dia = inputDia.value
    let hora = inputHorario.value
    let cliente = new Cliente (nombre,apellido,dia,hora)
    clientes.push(cliente)
    console.log(clientes)
    console.log(cliente)
}

formulario.onsubmit = (event) => ingresarCliente(event)

