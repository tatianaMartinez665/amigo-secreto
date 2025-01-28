// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//declaraciones
let listaAmigos = [];
let listaHTML = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.trim() === ""){
        //si se cumple, muestra el mensaje de error
        alert('Por favor, inserte un nombre.');
    }
}