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
    formulario.reset()
    console.log(clientes)
    console.log(cliente)
}

formulario.onsubmit = (event) => ingresarCliente(event)

inputHorario.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13){
        if ((HTMLInputElement.hora < "14:00")||(HTMLInputElement.hora > "21:00")){
                ingresarCliente(event)   
        }
    }    
})
