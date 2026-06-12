const receitas = [
  {
    titulo: "Geleia de Morango",
    texto: "Use morangos maduros, açúcar e limão. Cozinhe até engrossar."
  },
  {
    titulo: "Vitamina de Morango",
    texto: "Bata morangos maduros com leite e mel ou açúcar."
  },
  {
    titulo: "Morangos Congelados",
    texto: "Lave, seque e congele os morangos para usar em bolos, sucos e vitaminas."
  }
];

let indiceAtual = 0;

const tituloReceita = document.getElementById("tituloReceita");
const textoReceita = document.getElementById("textoReceita");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

function mostrarReceita() {
  tituloReceita.textContent = receitas[indiceAtual].titulo;
  textoReceita.textContent = receitas[indiceAtual].texto;
}

botaoAnterior.addEventListener("click", function() {
  indiceAtual--;

  if (indiceAtual < 0) {
    indiceAtual = receitas.length - 1;
  }

  mostrarReceita();
});

botaoProximo.addEventListener("click", function() {
  indiceAtual++;

  if (indiceAtual >= receitas.length) {
    indiceAtual = 0;
  }

  mostrarReceita();
});

mostrarReceita();
