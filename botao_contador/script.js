const botaoContador = document.querySelector("#btn-contador");

let contador = 0;
botaoContador.addEventListener("click", function(){
   contador++;
   botaoContador.textContent = `Clicado ${contador}x`;
})