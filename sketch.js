const receitas = [
  {
    titulo: "Geleia de Morango",
    imagem: "geleia.jpg",
    ingredientes: [
      "500 g de morangos maduros",
      "1 xícara de açúcar",
      "Suco de 1/2 limão"
    ],
    preparo: "Cozinhe os morangos picados com o açúcar e o limão em fogo baixo, mexendo sempre, até engrossar. Deixe esfriar e guarde em um pote de vidro."
  },
  {
    titulo: "Vitamina de Morango",
    imagem: "vitamina.jpg",
    ingredientes: [
      "1 xícara de morangos",
      "1 copo de leite ou iogurte",
      "1 colher de açúcar ou mel",
      "Gelo a gosto"
    ],
    preparo: "Bata todos os ingredientes no liquidificador até ficar cremoso. Sirva em seguida."
  },
  {
    titulo: "Morangos Congelados",
    imagem: "congelados.jpg",
    ingredientes: [
      "Morangos frescos e maduros"
    ],
    preparo: "Lave os morangos, retire o cabinho, seque bem e congele em um pote ou saco próprio. Use depois em receitas, sucos, vitaminas e sobremesas."
  }
];

let indiceAtual = 0;

const tituloReceita = document.getElementById("tituloReceita");
const imagemReceita = document.getElementById("imagemReceita");
const ingredientesReceita = document.getElementById("ingredientesReceita");
const preparoReceita = document.getElementById("preparoReceita");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

function mostrarReceita() {
  const receitaAtual = receitas[indiceAtual];

  tituloReceita.textContent = receitaAtual.titulo;
  imagemReceita.src = receitaAtual.imagem;
  imagemReceita.alt = receitaAtual.titulo;

  ingredientesReceita.innerHTML = "";

  receitaAtual.ingredientes.forEach(function(ingrediente) {
    const item = document.createElement("li");
    item.textContent = ingrediente;
    ingredientesReceita.appendChild(item);
  });

  preparoReceita.textContent = receitaAtual.preparo;
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

const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const resultadoQuiz = document.getElementById("resultadoQuiz");

botaoSim.addEventListener("click", function() {
  resultadoQuiz.textContent = "Correto! O desperdício de alimentos aumenta a produção de lixo e desperdiça água, solo, energia e transporte.";
});

botaoNao.addEventListener("click", function() {
  resultadoQuiz.textContent = "Ops! Na verdade, desperdiçar alimentos também causa impactos ambientais.";
});
