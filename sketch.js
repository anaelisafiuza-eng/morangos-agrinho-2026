let imgCapa;

function preload() {
  imgCapa = loadImage('CAPA.png');
}

function setup() {
  createCanvas(1000, 700);
  textFont('Arial');
}

function draw() {
  background(255, 245, 245);

  image(imgCapa, 0, 0, width, height);

  fill(220, 20, 60);
  rect(0, 0, width, 120);

  fill(255);
  textAlign(CENTER);
  textSize(36);
  text("🍓 Reaproveitamento de Morangos", width / 2, 50);

  textSize(18);
  text("Como reduzir o desperdício e aproveitar melhor os morangos", width / 2, 90);

  drawCard(50, 150, 900, 120, "O Problema do Desperdício",
    "Muitos morangos são desperdiçados diariamente por amadurecerem rápido.\nIsso gera prejuízo econômico e impacto ambiental.");

  drawCard(50, 290, 900, 180, "Como Reaproveitar Morangos",
    "🍓 Fazer geleias caseiras\n🍓 Produzir vitaminas e sucos\n🍓 Congelar para receitas futuras\n🍓 Criar doces e sobremesas\n🍓 Utilizar em bolos e tortas\n🍓 Produzir compostagem com restos");

  drawCard(50, 490, 420, 150, "Receita: Geleia de Morango",
    "Ingredientes:\n- 2 xícaras de morangos maduros\n- 1 xícara de açúcar\n- Suco de 1 limão\n\nCozinhe tudo até engrossar.");

  drawCard(530, 490, 420, 150, "Receita: Vitamina de Morango",
    "Ingredientes:\n- Morangos maduros\n- Leite\n- Mel ou açúcar\n\nBata tudo no liquidificador.");

  fill(220, 20, 60);
  rect(0, 660, width, 40);

  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("🍓 Site educativo sobre reaproveitamento de morangos - 2026", width / 2, 685);
}

function drawCard(x, y, w, h, titulo, conteudo) {
  fill(255);
  stroke(220);
  strokeWeight(2);
  rect(x, y, w, h, 15);

  noStroke();
  fill(220, 20, 60);
  textAlign(LEFT);
  textSize(24);
  text(titulo, x + 20, y + 35);

  fill(50);
  textSize(16);
  text(conteudo, x + 20, y + 70);
}
