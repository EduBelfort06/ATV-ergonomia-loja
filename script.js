let produtos = [];

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "123") {
    mostrarLoja();
  } else {
    alert("Login inválido. Use admin / 123.");
  }
}

function entrarSemLogin() {
  mostrarLoja();
}

function mostrarLoja() {
  document.getElementById("login-screen").classList.add("oculto");
  document.getElementById("loja-screen").classList.remove("oculto");
  mostrarTela('cadastro');
}

function logout() {
  location.reload(); // simples forma de "sair"
}

function mostrarTela(tela) {
  document.querySelectorAll('.secao').forEach(secao => secao.classList.add('oculto'));
  document.getElementById(tela).classList.remove('oculto');
}

function cadastrarProduto() {
  const nome = document.getElementById("nome-produto").value;
  const preco = parseFloat(document.getElementById("preco-produto").value);

  if (!nome || isNaN(preco)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  produtos.push({ nome, preco });
  atualizarLista();
  atualizarDashboard();
}

function atualizarLista() {
  const ul = document.getElementById("lista-produtos");
  ul.innerHTML = "";
  produtos.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.nome} - R$ ${p.preco.toFixed(2)}`;
    ul.appendChild(li);
  });
}

function atualizarDashboard() {
  document.getElementById("total-produtos").textContent = produtos.length;
}
