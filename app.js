let listaAmigos = [];
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  if (inputAmigo.value === "") {
    alert("El campo de amigo debe estar lleno");
  } else {
    listaAmigos.push(inputAmigo.value);
    inputAmigo.value = "";
    mostrarAmigo();
  }
}

function mostrarAmigo() {
  const amigo = document.createElement("li");
  amigo.textContent = listaAmigos[listaAmigos.length - 1];
  document.getElementById("listaAmigos").appendChild(amigo);
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  } else {
    const amigoSorteado =
      listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultado = document.createElement("li");
    resultado.textContent = "El amigo secreto es: " + amigoSorteado;
    document.getElementById("resultado").appendChild(resultado);
  }
}