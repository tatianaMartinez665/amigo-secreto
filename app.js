// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//declaraciones
let listaAmigos = [];


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

function mostrarAmigos(amigos){
    //obtener lista
    let lista = document.getElementById('listaAmigos');

    //limpiar lista
    lista.innerHTML="";

    
    for(let i=0; i<listaAmigos.length; i++){
        //crear un nuevo elemento <li>
        let li = document.createElement('li');
        //asignar el nombre del amigo al contenido de <li>
        li.textContent = amigos[i];
        //agregar el <li> a la lista
        //lista.appendChild(li);
        document.querySelector('ul').appendChild(li);
    }
}