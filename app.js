// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array de amigos

let amigos = [];

// Agregar amigo con validación
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue ingresado.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarListaAmigos();
}

// Mostrar lista con opción de eliminar
function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.style.marginLeft = "10px";
    botonEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(botonEliminar);
    lista.appendChild(li);
  });
}

// Eliminar amigo por índice
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  mostrarListaAmigos();
}

// Sortear todos los pares
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length < 2) {
    alert("Agrega al menos 2 nombres para realizar el sorteo.");
    return;
  }

  // Copia y mezcla la lista
  const mezclados = [...amigos];
  mezclarArray(mezclados);

  // Asignar: cada uno le da al siguiente; el último al primero
  for (let i = 0; i < mezclados.length; i++) {
    const quienDa = mezclados[i];
    const quienRecibe = mezclados[(i + 1) % mezclados.length];

    const li = document.createElement("li");
    li.textContent = `${quienDa} le da un regalo a ${quienRecibe}`;
    resultado.appendChild(li);
  }
}

// Función para mezclar un array (Fisher-Yates)
function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// codigo para challeng de formacion Alura 2025 