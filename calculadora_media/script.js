const botao = document.querySelector('#calculo');

botao.addEventListener('click', function () {
   const n1 = Number(document.querySelector('#num1').value);
   const n2 = Number(document.querySelector('#num2').value);
   const n3 = Number(document.querySelector('#num3').value);
   const n4 = Number(document.querySelector('#num4').value);

   const media = (n1 + n2 + n3 + n4) / 4;
   const saida = document.querySelector('#resultado');

   if (media >= 4 && media < 7) {
      saida.textContent = `Média: ${media} — Recuperação`;
      saida.className = 'recuperacao';
   }
   else {
      saida.textContent = `Média: ${media} — ${media >= 7 ? 'Aprovado' : 'Reprovado'}`;
      saida.className = media >= 7 ? 'aprovado' : 'reprovado';
   }
});