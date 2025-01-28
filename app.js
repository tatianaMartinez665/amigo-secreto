// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//declaraciones
let listaAmigos = [];
let listaHTML = [];

//  funciones 

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.trim() === ""){
        //si se cumple, muestra el mensaje de error
        alert('Por favor, inserte un nombre.');
    }else{
        //si no, se agrega a la lista
        listaAmigos.push(nombreAmigo);
        //limpia el campo despues de añadir un nombre, dejandola vacia
        document.getElementById('amigo').value = '';
        mostrarAmigos(listaAmigos);
    }
}

