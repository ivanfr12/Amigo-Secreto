// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []


/* Tareas específicas:
 
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.*/
function agregarAmigo(){
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim(); //trim() elimina los espacios en blanco al principio y al final de una cadena de texto.

/*Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/
    if (nombre === ''){
        alert('Por favor, inserte un nombre.');
        return;
    }

/*Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.*/

 //Actualizar el array de amigos
    amigos.push(nombre);

    //Actualizar la lista en la interfaz
    actualizarListaAmigos();   

    //Limpiar el campo de entrada
    inputAmigo.value = '';
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    // Validar que haya amigos en la lista
    if (amigos.length === 0){
        alert('Debe agregar al menos un amigo para poder sortear.');
        return;
    }

    // Generar un númer aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}

function reiniciarSorteo(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Limpiar el array de amigos
    amigos = [];

    // Actualizar la lista en la interfaz
    actualizarListaAmigos();
}

