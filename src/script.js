// se puede buscar al elemento HTML por la clase (.clase) o por el ID (#id)
//Declaración de variables en JS (son las constantes nombre, email, whatsapp y mensaje)
const nombre = document.querySelector ('#nombre')   
const email  = document.querySelector('#email')
const whatsapp  = document.querySelector('#whatsApp')
const mensaje  = document.querySelector('#mensaje')
// console.log(nombre):. retorna todo el elemnto html <input...

//Asignar el evento al elemento HTML en JS |Eventos: change, input, click,submit
//Event o e o nombre-del-valor.value: Se recibe el dato ingresado por pantalla y eso se muestra en la consola
nombre.addEventListener ('click', function (event){
    console.log('event', event)
    console.log(event.target.value)
}
)
email.addEventListener ('click', function (event){
    console.log(event.target.value)
}
)
whatsapp.addEventListener ('click', function (event){
    console.log(event.target.value)
}
)
mensaje.addEventListener ('click', function (event){
    console.log(event.target.value)
}
)
// Evento click aplicado al botón submit
// const formulario = document.querySelector ('.formulario input[type="submit"]')

// formulario.addEventListener ('click', (event) => {
//     console.log('click')
//     event.preventDefault ()
// }
// )
//---------------------------------------------------------
// Seleccionar el elemento de HTML contenedor formulario 
const formulario = document.querySelector ('.formulario')
formulario.addEventListener ('submit', function (event)
{   event.preventDefault()
    console.log ('submit', nombre.value)
    if (nombre.value == ''|| email.value == '' || whatsapp.value == '' || mensaje.value == '')
    mostrarError ()
    else 
    mostrarMensaje ()
})

//La clase error define los estilos css para el elemento HTML párrafo.
function mostrarError () {
const alerta = document.createElement ('p')
alerta.textContent = 'Todos los campos son obligatorios'
alerta.classList.add ('error')
//Añadir el elemento parrafo a un contenedor padre para este caso el contenedor formulario
formulario.appendChild(alerta)
setTimeout ( () => {
 alerta.remove ()
}, 3000);
}

function mostrarMensaje () {
    const mensaje = document.createElement ('p')
    mensaje.textContent = 'Mensaje enviado correctamente'
    mensaje.classList.add ('correcto')
    formulario.appendChild (mensaje)
    setTimeout ( 
        () => { mensaje.remove ()
    }, 3000);
}
//---------------------------------------------------------

