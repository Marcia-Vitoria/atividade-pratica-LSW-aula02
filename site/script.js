/* 
1-Adicione um botão no HTML. Ao clicar, use classList.toggle para ligar uma classe .escuro no body

2-A cada clique em um link do <nav>, some 1 e mostre o total em um <p> na página

3-Validação do formulário ao enviar, se o campo estiver vazio, mostre um aviso e não deixe prosseguir
*/

let cliques = 0;
const links = document.querySelectorAll("nav a");
const contador = document.getElementById("contador");
const botao = document.getElementById("tema");
const formulario = document.querySelector("form");

//1
botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.textContent = "Modo claro";
    } else {
        botao.textContent = "Modo escuro";
    }
});

//2
links.forEach(function(link) {
    link.addEventListener("click", function() {
        cliques++;
        contador.textContent = cliques;
    });
});

//3
formulario.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || mensagem.trim() === "") {
        event.preventDefault();
        alert("Preencha todos os campos antes de enviar!");
    }
});