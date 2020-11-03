/* AQUI ESTAMOS LINKANDO O CIPHER.JS COM O NOSSO INDEX.JS */
import cipher from './cipher.js';

// console.log(cipher);

/* COM O GETELEMENTBYID PEGUEI O QUE VOU PRECISAR NO MEU JS*/
var botao1 = document.getElementById("botaoCrip");

/* FUNÇÃO QUE VAI PEGAR O VALOR DA PRIMEIRA CAIXA DE TEXTO E PRINTAR NA TELA A MENSAGEM CRIP */
function imprimir() {
    var desloc = document.getElementById("deslocamento").value;
    desloc = parseInt(desloc)
    var primeiroTexto = document.getElementById("caixaTxt1").value;
    var msgCifrada = cipher.cifrar(desloc,primeiroTexto);
    document.getElementById("resultado").innerHTML = msgCifrada;
}

/* EVENTO QUE ESTA PARTINDO DO MEU BOTAO E CHAMANDO A FUNÇÃO QUANDO HOUVER UM CLICK */
botao1.addEventListener("click", imprimir);

/* COM O GETELEMENTBYID PEGUEI O BOTAO NO MEU HTML E ATRIBUI ELE A VARIAVEL BOTAO2 */
var botao2 = document.getElementById("botaoDecrip");

/* FUNÇÃO QUE VAI PEGAR O VALOR DA SEGUNDA CAIXA DE TEXTO E PRINTAR NA TELA A MENSAGEM DESCRIP */
function imprimir2() {
    var desloc = document.getElementById("deslocamento").value;
    desloc = parseInt(desloc)
    var segundoTexto = document.getElementById("caixaTxt2").value;
    var msgCifrada2 = cipher.decifrar (desloc,segundoTexto);
    document.getElementById("resultado").innerHTML = msgCifrada2;
}

/* EVENTO QUE ESTA PARTINDO DO MEU BOTAO E CHAMANDO A FUNÇÃO QUANDO HOUVER UM CLICK */
botao2.addEventListener("click", imprimir2);

